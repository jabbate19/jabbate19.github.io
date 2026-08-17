import { Link } from 'react-router-dom'
import { copyToClipboard } from '../../services/clipboard'
import { contactChannels, contactPgp } from '../../data/contact'
import './Contact.css'

export function ContactSide({ onToast }: { onToast: (m:string)=>void }) {
  return (
    <aside className="side sticky">
      <div className="connect-group">
        <h3 className="connect-head">Follow the Work</h3>
        <div className="card connect-card">
          <div className="links">
            {contactChannels.map(ch => {
              return (
                <div key={ch.label} className="link-row">
                  <div><div className="link-label">{ch.label}</div><div className="lm">{ch.sub}</div></div>
                  <div className="link-actions">
                    {'action' in ch && ch.action?.type==='copy' ? (
                      <>
                        <button className="badge" type="button" onClick={async()=>{ const ok=await copyToClipboard(ch.action!.value); onToast(ok?'Copied':'Copy failed')}}>copy</button>
                        <a href={ch.href}>open</a>
                      </>
                    ) : (
                      <a href={ch.href}>{'hrefLabel' in ch ? (ch as unknown as {hrefLabel:string}).hrefLabel : 'open'}</a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="connect-group">
        <h3 className="connect-head">Résumé</h3>
        <div className="card card-ghost connect-card">
          <div className="pgp-desc">One-page record of experience, education and projects — available as PDF.</div>
          <div className="row" style={{ marginTop: 12 }}>
            <Link className="badge" to="/resume">view résumé</Link>
          </div>
        </div>
      </div>

      {/* <div className="card card-ghost">
        <h4>Colophon</h4>
        <div className="colophon">
          {contactColophon.map(c => <div key={c}>{c}</div>)}
        </div>
      </div> */}

      <div className="connect-group">
        <h3 className="connect-head">Encrypted Questions</h3>
        <div className="card connect-card">
          <h4 style={{display:'none'}}>Encrypted questions · PGP</h4>
        <div className="pgp-desc">If you ever feel the need to encrypt a message, use the key below — verify the fingerprint out-of-band before encrypting.</div>
        <div className="pgp-meta">
          <span className="mono pgp-algo">{contactPgp.algo}</span>
          <span className="pgp-dot" aria-hidden>·</span>
          <span className="mono muted" title="Key ID">{contactPgp.keyId}</span>
          <span className="pgp-dot" aria-hidden>·</span>
          <span className="mono muted">{contactPgp.created}</span>
        </div>
        {/* codespell:ignore-next-line fpr */}
        <div className="fp"><span className="mono muted">FPR</span> {contactPgp.fpLines[0]}<br/>{contactPgp.fpLines[1]}<br/><span className="mono muted">UID</span> {contactPgp.uid}</div>
        <div className="row">
          <button className="badge" type="button" onClick={async()=>{ const ok=await copyToClipboard(contactPgp.fingerprint); onToast(ok?'Fingerprint copied':'Copy failed')}}>copy fingerprint</button>
          <button className="badge" type="button" onClick={async()=>{ const ok=await copyToClipboard(contactPgp.armor); onToast(ok?'Public key copied':'Copy failed')}}>copy public key</button>
          <a className="badge" href="/joeabbate.asc" download>download .asc</a>
        </div>
        <details className="pgp-details">
          <summary className="pgp-summary">Show public key</summary>
          <pre className="pgp-armor">{contactPgp.armor}</pre>
        </details>
        </div>
      </div>

      {/* <div className="card card-ghost">
        <h4>What you can learn here</h4>
        <div className="learn-list">
          {contactLearnItems.map(i => (
            <div key={i.b} className="learn-item"><b>{i.b}</b>{i.t}</div>
          ))}
        </div>
      </div> */}
    </aside>
  )
}
