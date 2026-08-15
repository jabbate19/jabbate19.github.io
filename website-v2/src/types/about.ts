export type TimelineStep = {
  level: string
  period: string
  role: string
  desc?: string
}

export type TimelineEntry = {
  id: string
  period: string
  role: string
  where: string
  desc: string
  featured?: boolean
  steps?: TimelineStep[]
}

export type PersonInfo = {
  name: string
  from: string
  basedIn: string
  focus: string
}

export type OutsideRow = { k: string; vHtml: string }
