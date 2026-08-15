export type NavLink = {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Résumé', to: '/resume' },
  { label: 'Connect', to: '/contact' },
]

export const navMeta: Record<string, string> = {
  '/': 'welcome!',
  '/about': 'who am I?',
  '/projects': 'so what do I actually work on?',
  '/resume': 'the one-pager',
  '/contact': 'come find me elsewhere!',
}
