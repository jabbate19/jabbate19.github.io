import { useState, useCallback, useEffect } from 'react'

export type Toast = { id: number; message: string } | null

export function useToast() {
  const [toast, setToast] = useState<Toast>(null)

  const show = useCallback((message: string) => {
    setToast({ id: Date.now(), message })
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 1900)
    return () => clearTimeout(t)
  }, [toast])

  return { toast, show, dismiss: () => setToast(null) }
}
