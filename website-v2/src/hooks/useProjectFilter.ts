import { useMemo, useDeferredValue, useTransition } from 'react'
import type { Project } from '../types/project'

export function useProjectFilter(
  projects: Project[],
  query: string,
) {
  const deferredQuery = useDeferredValue(query)
  const [isPending, startTransition] = useTransition()

  const filtered = useMemo(() => {
    const q = deferredQuery.toLowerCase().trim()
    return projects.filter(p => {
      const hay = (p.title + p.desc + p.tags.join(' ')).toLowerCase()
      const qOk = !q || hay.includes(q)
      return qOk
    })
  }, [projects, deferredQuery])

  return { filtered, isPending, startTransition }
}
