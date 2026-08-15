import type { ContactPayload } from '../types/contact'

const delay = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

/**
 * Mock contact submit — replace with real fetch when backend is ready.
 * Example:
 *   const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
 *   if(!res.ok) throw new Error('Failed')
 */
export async function mockSubmitContact(payload: ContactPayload): Promise<void> {
  await delay(700)
  // Simulate occasional error for testing — remove in production
  // if (Math.random() < 0.08) throw new Error('Network error — try again.')
  void payload
  // TODO: replace with real fetch above
}

export function buildDraft(payload: ContactPayload): string {
  const n = payload.name.trim() || 'a reader'
  const topic = payload.topic.trim() || 'general question'
  const q = payload.message.trim() || 'what you want to understand or reuse'
  return `Hi,\n\nI am ${n}.\nRe: ${topic}\n\n${q}\n\nContext: reading your work archive.\n\nThanks. Feel free to publish as a note if useful.\n\n${n}`
}

export function buildMailto(payload: ContactPayload, email: string): string {
  const draft = buildDraft(payload)
  const subj = encodeURIComponent('Question about: ' + (payload.topic || 'your work'))
  const body = encodeURIComponent(draft)
  return `mailto:${email}?subject=${subj}&body=${body}`
}
