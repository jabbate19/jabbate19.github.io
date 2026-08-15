import { useState } from 'react'
import { projects } from '../data/projects'
import { useProjectFilter } from '../hooks/useProjectFilter'
import { FilterBar, ProjectGrid } from '../components/projects/Projects'

export function ProjectsPage() {
  const [query, setQuery] = useState('')
  const { filtered } = useProjectFilter(projects, query)

  return (
    <>
      <div className="top">
        <div>
          <h1>Projects</h1>
        </div>
      </div>
      <FilterBar query={query} onQuery={setQuery} count={filtered.length} />
      <ProjectGrid projects={filtered} />
    </>
  )
}
