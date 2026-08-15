import { useState } from 'react'
import type { ContactPayload } from '../../types/contact'
import { mockSubmitContact, buildDraft, buildMailto } from '../../services/contact'
import { copyToClipboard } from '../../services/clipboard'
import { contactTopics } from '../../data/contact'
import { siteConfig } from '../../config/site'
import './Contact.css'

type Props = { onToast: (msg: string) => void }

export function ContactForm({ onToast }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [errEmail, setErrEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const payload: ContactPayload = { name, email, topic, message }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrEmail('Check format, e.g. you@domain.com, or leave blank.')
      onToast('Fix highlighted field')
      return
    }
    setErrEmail('')
    setLoading(true)
    try {
      // MOCK FETCH — replace mockSubmitContact with real fetch when backend ready
      await mockSubmitContact(payload)
      onToast('Sent — mock fetch succeeded')
      // keep values so user can copy draft if needed, or clear:
      // setMessage('')
    } catch (err) {
      onToast(err instanceof Error ? err.message : 'Send failed')
    } finally {
      setLoading(false)
    }
  }

  const handleMailto = () => {
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrEmail('Check format, e.g. you@domain.com, or leave blank.')
      onToast('Fix highlighted field')
      return
    }
    window.location.href = buildMailto(payload, siteConfig.email)
  }

  const handleCopyDraft = async () => {
    const ok = await copyToClipboard(buildDraft(payload))
    onToast(ok ? 'Draft copied' : 'Copy failed')
  }

  return (
    <div className="card">
      <h4>Ask about the work</h4>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid-2">
          <div className="field">
            <label className="label" htmlFor="f-name">Name or handle</label>
            <input className="input" id="f-name" autoComplete="name" placeholder="Alex or @handle" value={name} onChange={e=>setName(e.target.value)} />
          </div>
          <div className="field">
            <label className="label" htmlFor="f-email">Email <small>optional</small></label>
            <input className="input" id="f-email" type="email" autoComplete="email" placeholder="you@domain.com" value={email} onChange={e=>{setEmail(e.target.value); setErrEmail('')}} aria-invalid={!!errEmail || undefined} />
            {errEmail && <div className="field-err show" role="alert">{errEmail}</div>}
            <div className="hint">Leave blank if you just want to leave a note inline.</div>
          </div>
        </div>

        <div className="field">
          <label className="label" htmlFor="f-topic">Project or note</label>
          <input className="input" id="f-topic" list="topic-list" placeholder="e.g. policy linter, provenance badge, scope essay" value={topic} onChange={e=>setTopic(e.target.value)} />
          <datalist id="topic-list">
            {contactTopics.map(t => <option key={t} value={t} />)}
          </datalist>
        </div>

        <div className="field">
          <label className="label" htmlFor="f-message">Question or reuse note</label>
          <textarea id="f-message" placeholder="How did you model path-aware scope? I am hitting a case where..." value={message} onChange={e=>setMessage(e.target.value)} />
          <div className="hint">One concrete question beats a long thread. Include a link if you are reproducing something.</div>
        </div>

        <div className="form-actions">
          <button className="btn btn-p" type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send via mock fetch'}</button>
          <button className="btn btn-s" type="button" onClick={handleMailto}>Open mail client</button>
          <button className="btn" type="button" onClick={handleCopyDraft}>Copy draft</button>
          <span className="hint" style={{margin:0}}>Local only, no tracking, published only with permission</span>
        </div>
        <div className="hint" style={{marginTop:10}}>Send uses a mock fetch (700ms delay) you can replace in <code>src/services/contact.ts</code>. Mail client and Copy still work offline.</div>
      </form>
    </div>
  )
}
