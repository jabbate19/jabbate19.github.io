import type { Signal } from '../../types/project'
import './Home.css'

export function SignalBar({ signals }: { signals: Signal[] }) {
  return (
    <div className="sig-bar" aria-label="Key numbers">
      {signals.map(s => (
        <div key={s.k} className="sig-cell"><div className="k">{s.k}</div><div className="v">{s.v}</div></div>
      ))}
    </div>
  )
}
