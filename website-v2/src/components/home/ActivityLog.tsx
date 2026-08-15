import { homeLogs } from '../../data/home'
import './Home.css'

export function ActivityLog() {
  return (
    <section className="section">
      <div className="s-head">
        <h2>Recent Changes</h2>
        {/* <p>Short entries that point to the artifact, not a summary about it.</p> */}
      </div>
      <div className="log-grid">
        {[...homeLogs].sort((a, b) => b.date.localeCompare(a.date)).map(l => (
          <div key={`${l.date}-${l.html}`} className="log-card">
            <span className="d mono">{l.date}</span>
            <span className="t" dangerouslySetInnerHTML={{ __html: l.html }} />
          </div>
        ))}
      </div>
    </section>
  )
}
