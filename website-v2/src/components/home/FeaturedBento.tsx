import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { homeBento } from '../../data/home'
import { useRealmStars } from '../../hooks/useRealmStars'
import featuredImg from '../../assets/featured.png'
import './Home.css'
import { projects } from '../../data/projects'

export function FeaturedBento() {
  const { main, side } = homeBento
  const stars = useRealmStars()
  const mainDesc = useMemo(() => {
    if (stars === null) return main.desc
    return main.desc.replace('over 500', stars.toLocaleString())
  }, [main.desc, stars])
  return (
    <section className="section">
      <div className="s-head">
        <h2>Featured Work</h2>
        {/* <p>Why each one exists, what changed, and where to read the reasoning with code and runbook.</p> */}
      </div>
      <div className="bento">
        <Link className={`bento-main ${(main.team as string) === 'red-team' ? 'is-red' : 'is-blue'}`} to="/projects">
          <div className="b-meta"><span>{main.meta}</span><span className="mono" style={{opacity:.85}}>{stars ? `${stars.toLocaleString()}★` : '★'}</span></div>
          <h3>{main.title}</h3>
          <p className="desc">{mainDesc}</p>
          <div className="bento-featured-media" aria-hidden="false">
            <img src={featuredImg} alt="Realm — Adversary Emulation Framework" width={560} height={300} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div className="meta-row"><span>{main.foot[0]}</span><span>{main.foot[1]}</span></div>
        </Link>
        <div className="bento-side">
          {side.map(c => (
            <Link key={c.title} className={`bento-card ${(c.team as string) === 'red-team' ? 'is-red' : 'is-blue'}`} to="/projects">
              <div className="b-meta"><span>{c.meta}</span></div>
              <h3>{c.title}</h3>
              <p className="desc">{c.desc}</p>
              <div className="meta-row"><span>{c.foot[0]}</span><span>{c.foot[1]}</span></div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bento-more"><Link className="link-sm" to="/projects">See all {projects.length} projects</Link></div>
    </section>
  )
}
