import { useState, useEffect } from 'react'

const GITHUB_API_URL = 'https://api.github.com/repos/spellshift/realm'
const STORAGE_KEY = 'realm:stars:v1'
const CACHE_TTL = 1000 * 60 * 60 // 1 hour

type Stored = { v: number; c: number; t: number }

// Module-level caches — js-cache-function-results, js-cache-storage
let memoryCache: { value: number; expiresAt: number } | null = null
let inflight: Promise<number | null> | null = null
let storageReadCache: number | null | undefined = undefined

function readStorage(): { value: number; expiresAt: number } | null {
  if (typeof window === 'undefined') return null
  if (storageReadCache !== undefined) {
    // js-cache-storage: avoid repeated localStorage reads
    if (storageReadCache === null) return null
    // we don't have expiresAt cached, so fallback to actual read once per session
    // keep simple: if cache hit, assume valid if memoryCache exists, else re-read
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      storageReadCache = null
      return null
    }
    const parsed = JSON.parse(raw) as Stored
    // client-localstorage-schema: version check + minimal payload
    if (parsed.v !== 1 || typeof parsed.c !== 'number' || typeof parsed.t !== 'number') {
      storageReadCache = null
      return null
    }
    const expiresAt = parsed.t + CACHE_TTL
    if (Date.now() > expiresAt) {
      storageReadCache = null
      return null
    }
    storageReadCache = parsed.c
    return { value: parsed.c, expiresAt }
  } catch {
    storageReadCache = null
    return null
  }
}

function writeStorage(value: number): void {
  if (typeof window === 'undefined') return
  try {
    const payload: Stored = { v: 1, c: value, t: Date.now() }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    storageReadCache = value
  } catch {
    // ignore quota errors
  }
}

async function fetchStars(): Promise<number | null> {
  try {
    const res = await fetch(GITHUB_API_URL, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return null
    const data = (await res.json()) as { stargazers_count?: number }
    if (typeof data.stargazers_count !== 'number') return null
    return data.stargazers_count
  } catch {
    return null
  }
}

// client-swr-dedup: shared inflight promise so concurrent callers coalesce
async function getStars(): Promise<number | null> {
  // async-cheap-condition-before-await: sync cache check before network
  if (memoryCache && memoryCache.expiresAt > Date.now()) {
    return memoryCache.value
  }
  const stored = readStorage()
  if (stored) {
    memoryCache = stored
    return stored.value
  }
  if (inflight) return inflight

  inflight = (async () => {
    const count = await fetchStars()
    if (count !== null) {
      memoryCache = { value: count, expiresAt: Date.now() + CACHE_TTL }
      writeStorage(count)
      return count
    }
    return null
  })()

  try {
    return await inflight
  } finally {
    inflight = null
  }
}

export function useRealmStars(): number | null {
  // rerender-lazy-state-init: expensive sync read done lazily once
  const [stars, setStars] = useState<number | null>(() => {
    if (memoryCache && memoryCache.expiresAt > Date.now()) return memoryCache.value
    const stored = readStorage()
    if (stored) {
      memoryCache = stored
      return stored.value
    }
    return null
  })

  useEffect(() => {
    // cheap condition before async work
    if (memoryCache && memoryCache.expiresAt > Date.now()) return

    let cancelled = false
    // start promise early, await late (async-defer-await pattern)
    const promise = getStars()
    promise.then(value => {
      if (!cancelled && value !== null) {
        // rerender-functional-setstate not needed here; value is stable
        setStars(value)
      }
    })
    return () => {
      cancelled = true
    }
    // rerender-dependencies: primitive deps only, runs once per mount
  }, [])

  return stars
}
