import { Link } from 'react-router-dom'
// import { homeFocusRows } from '../../data/home'
// import { homePrinciples } from '../../data/home' // commented with Principles card
import homeImg from '../../assets/home.jpg'
import './Home.css'

export function Hero() {
  return (
    <div className="hero">
      <div>
        {/* <div className="k-label">hack the planet!</div> */}
        <h1 className="h1">Welcome to the Lab.</h1>
        <p className="h1-sub">This is my place to share ideas, projects, or talks that I am working on.</p>
        <p className="h1-copy">A lot of my work will be automating security workflows and building tools to make security more accessible.</p>
        <div className="hero-actions">
          <Link className="btn btn-p" to="/projects">cd ~/projects</Link>
          <Link className="btn btn-s" to="/about">$whoami</Link>
        </div>
      </div>
      <div className="hero-photo" aria-hidden="false">
        <img
          src={homeImg}
          alt="Joe Abbate — Security Engineer"
          width={520}
          height={380}
          loading="eager"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* <div className="side">
        <div className="card">
          <h4>Currently exploring</h4>
          {homeFocusRows.map(r => (
            <div key={r.label} className="focus-row"><b>{r.label}</b></div>
          ))}
        </div>
        <div className="card card-ghost">
          <h4>Principles</h4>
          <div className="tag-row">
            {homePrinciples.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
        <div className="card stats-card">
          <div className="stats-icon" aria-hidden="true">13</div>
          <div className="stats-text"><b>Notes, talks, advisories</b><span>Linked from projects, CC BY where possible</span></div>
        </div>
      </div> */}
    </div>
  )
}
