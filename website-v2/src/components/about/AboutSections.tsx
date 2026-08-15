import { Link } from 'react-router-dom'
import { outsideRows, personInfo, timelineEntries } from '../../data/about'
import aboutImg from '../../assets/about.jpg'
import './About.css'

export function AboutHero() {
  return (
    <div className="about-hero">
      <div>
        <div className="eyebrow">About</div>
        <h1 className="ah1">Hey, I am Joe.<span className="ah1-line">Security engineer who grew up taking things apart to see how they fail. Now I'm building tools to test the limits of automation.</span></h1>
        <div className="lead">
          <p>I am a <b>builder who works in security</b>. I love solving complex problems and building tools that make security more accessible.</p>
          <p>In college, I spent a lot of time building tools to support defensive and offensive security for competitions. Now I do Blue Team for work, and Red Team for fun :)</p>
          <p>I now work on <b>Solving Insider Threat problems at Meta</b>, designing detections, preventions, and automation to improve security posture and enable investigators to succeed.</p>
        </div>
        <div className="about-ctas">
          <Link className="btn btn-p" to="/projects">See the work</Link>
          <Link className="btn btn-s" to="/resume">View résumé</Link>
        </div>
      </div>

      <div className="person">
        <div className="ph" style={{ padding: 0, overflow: 'hidden' }}>
          <img src={aboutImg} alt="Portrait placeholder — replace with 320×320 photo" width={320} height={320} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
        </div>
        <div className="pm">
          <h4>{personInfo.name}</h4>
          <div className="kv"><span className="k">From</span><span className="v">{personInfo.from}</span></div>
          <div className="kv"><span className="k">Based in</span><span className="v">{personInfo.basedIn}</span></div>
          <div className="kv"><span className="k">Focus</span><span className="v">{personInfo.focus}</span></div>
        </div>
      </div>
    </div>
  )
}

export function AboutTimeline() {
  return (
    <section className="section">
      <h2>How did we get here?</h2>
      <div className="timeline">
        {timelineEntries.map(e => (
          <div key={e.id} className={e.featured ? 't-feature' : 't-card'}>
            <div className="t-dot" aria-hidden="true"></div>
            <div>
              <div className="t-when"><strong>{e.period}</strong></div>
              <div className="t-role">{e.role}</div>
              <div className="t-where">{e.where}</div>
              <div className="t-desc">{e.desc}</div>
              {e.steps && e.steps.length > 0 && (
                <div className="t-steps" aria-label={`${e.where} promotion history`}>
                  {e.steps.map((s, idx) => (
                    <div key={s.level} className={`t-step ${idx === 0 ? 't-step--current' : ''}`}>
                      <div className="t-step-line" aria-hidden="true">
                        <span className={`t-step-dot ${idx === 0 ? 't-step-dot--current' : idx === 1 ? 't-step-dot--promo' : ''}`} />
                      </div>
                      <div className="t-step-body">
                        <div className="t-step-head">
                          <span className="t-step-period">{s.period}</span>
                          {idx === 0 && <span className="t-step-badge">Current</span>}
                        </div>
                        <div className="t-step-role">{s.role}</div>
                        {s.desc && <div className="t-step-desc">{s.desc}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function AboutOutside() {
  return (
    <section className="section">
      <h2>Outside work</h2>
      <div className="outside">
        {outsideRows.map(r => (
          <div key={r.k} className="out-row"><div className="out-k">{r.k}</div><div className="out-v" dangerouslySetInnerHTML={{ __html: r.vHtml }} /></div>
        ))}
      </div>
    </section>
  )
}
