export type ContactChannel = { label: string; sub: string; href?: string; action?: { type:'copy'|'mailto'; value:string; label:string } }
export type ContactPayload = {
  name: string
  email: string
  topic: string
  message: string
}
