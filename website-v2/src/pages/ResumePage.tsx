import { useEffect } from 'react'

export function ResumePage() {
  useEffect(() => {
    document.title = 'Résumé — Joe Abbate'
  }, [])

  return (
    <>
      {/* Dossier header — leans into the security-engineer vernacular without gimmick */}
      <div
        style={{
          marginTop: 18,
          border: '1px solid var(--border)',
          borderRadius: 'var(--card)',
          background:
            'linear-gradient(180deg, rgba(59,130,246,0.08), transparent 55%), var(--surface)',
          overflow: 'hidden',
        }}
      >
        {/* top rule — file tab */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(10,22,40,0.55)',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: 'var(--accent)',
              boxShadow: 'var(--glow-dot)',
              flexShrink: 0,
            }}
            aria-hidden
          />
          <span>File: JOE_ABBATE_RESUME.pdf</span>
          <span style={{ opacity: 0.45 }} aria-hidden>
            ·
          </span>
          <span style={{ marginLeft: 'auto', textTransform: 'none', letterSpacing: '0.02em' }}>
            Updated Aug 2026 · 1 page · PDF
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.55fr) 320px',
            gap: 24,
            padding: '22px 20px 18px',
          }}
          className="resume-head-grid"
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
               Résumé
            </div>
            <h1
              style={{
                fontSize: 'clamp(22px, 3vw, 30px)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                fontWeight: 700,
                margin: 0,
              }}
            >
              Joseph Abbate
              <span
                style={{
                  display: 'block',
                  fontWeight: 500,
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  letterSpacing: '-0.01em',
                  color: 'var(--muted)',
                  marginTop: 6,
                }}
              >
                Security Engineer · Insider Trust · Builder
              </span>
            </h1>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
              <a href="/resume.pdf" download className="btn btn-p">
                Download PDF
                <span aria-hidden>↗</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-s">
                Open in new tab
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Viewer chrome — the signature: paper on a dark desk, not a generic iframe */}
      <div
        className="resume-viewer"
        style={{
          marginTop: 18,
          border: '1px solid var(--border)',
          borderRadius: 'var(--card)',
          overflow: 'hidden',
          background: 'var(--surface2)',
          boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 14px',
            borderBottom: '1px solid var(--border)',
            background: 'rgba(10,22,40,0.72)',
          }}
        >
          <span style={{ display: 'flex', gap: 6 }} aria-hidden>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#ff5f57', border: '1px solid rgba(0,0,0,0.2)' }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#febc2e', border: '1px solid rgba(0,0,0,0.2)' }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#28c840', border: '1px solid rgba(0,0,0,0.2)' }} />
          </span>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '0.04em',
              color: 'var(--muted)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            resume.pdf — viewer
          </span>
        </div>

        <div
          style={{
            background:
              'radial-gradient(600px 320px at 20% 0%, rgba(59,130,246,0.10), transparent 60%), var(--bg)',
            padding: 12,
          }}
        >
          <div
            style={{
              borderRadius: 'var(--r)',
              overflow: 'hidden',
              background: '#fff',
              border: '1px solid rgba(30,51,92,0.25)',
              minHeight: 640,
              height: '72vh',
            }}
          >
            <object
              data="/resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              style={{ display: 'block', border: 0, minHeight: 640, height: '72vh' }}
              aria-label="Résumé PDF"
            >
              <div style={{ padding: 28, textAlign: 'center', color: '#334155' }}>
                <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 420, margin: '0 auto' }}>
                  Your browser cannot display the embedded PDF.
                  <br />
                  <a href="/resume.pdf" style={{ color: '#2563eb', fontWeight: 600 }}>
                    Download the résumé (PDF)
                  </a>{' '}
                  instead.
                </p>
              </div>
            </object>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 860px) {
  .resume-head-grid { grid-template-columns: 1fr !important; }
}
@media (prefers-color-scheme: dark) {
  .resume-viewer { background: #000 !important; }
  .resume-viewer > div:nth-child(2) { background: #000 !important; }
}`}</style>
    </>
  )
}
