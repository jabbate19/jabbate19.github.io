export type ProjectTeam = 'red-team' | 'blue-team' | 'research'

export type Project = {
  id: number
  tags: string[]
  team: ProjectTeam
  title: string
  desc: string
  bullets: [string, string][]
  linkLabel: string
}

export type Signal = { k: string; v: string }
export type LogEntry = { date: string; html: string }
export type BentoMain = { meta: string; title: string; desc: string; foot: [string,string] }
export type BentoCard = { meta: string; title: string; desc: string; foot: [string,string] }
