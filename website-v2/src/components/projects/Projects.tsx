import { memo } from 'react'
import type { Project } from '../../types/project'
import './Projects.css'

export const ProjectCard = memo(function ProjectCard({ project }: { project: Project }) {
  const href = project.linkLabel.startsWith('http') ? project.linkLabel : `https://${project.linkLabel}`
  const teamClass =
    project.team === 'red-team' ? 'is-red' : project.team === 'research' ? 'is-research' : 'is-blue'
  const pillClass =
    project.team === 'red-team' ? 'team-red' : project.team === 'research' ? 'team-research' : 'team-blue'
  return (
    <article className={`proj-card ${teamClass}`}>
      <div className="pc-signal" aria-hidden />
      <div className="card-top">
        <span className="meta-stack">{project.tags.join(' · ')}</span>
        <span className="mono pc-id">#{String(project.id).padStart(2, '0')}</span>
      </div>
      <div className="pc-head">
        <h3>{project.title}</h3>
        <span className={`pc-team ${pillClass}`}>{project.team}</span>
      </div>
      <p className="desc">{project.desc}</p>
      <ul className="bullets">
        {project.bullets.map(([k, v]) => <li key={k}><span className="b-k">{k}</span><span className="b-v">{v}</span></li>)}
      </ul>
      <div className="card-foot">
        <a className="pc-link" href={href} target="_blank" rel="noreferrer">{project.linkLabel} →</a>
      </div>
    </article>
  )
})

export function FilterBar({
  query,
  onQuery,
  count,
}: {
  query: string
  onQuery: (v: string) => void
  count: number
}) {
  return (
    <div className="filters">
      <div className="search">
        <input value={query} onChange={e => onQuery(e.target.value)} placeholder="search" aria-label="Search projects" />
        <span className="mono search-count">{count} results</span>
      </div>
    </div>
  )
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length) {
    return <div className="empty">No matches, try a broader search.</div>
  }
  return (
    <div className="grid">
      {projects.map(p => <ProjectCard key={p.id} project={p} />)}
    </div>
  )
}
