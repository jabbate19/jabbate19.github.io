# AGENTS.md

## Code Map
- `components/layout/` - global chrome (Nav, Footer, PageTransition)
- `components/home/` - landing sections (Hero, FeaturedBento, ActivityLog, SignalBar)
- `components/projects/` - project listing
- `components/about/` - about sections
- `components/contact/` - contact form and side panel
- `components/ui/` - shared components (Button, Toast)
- `pages/` - route wrappers (HomePage, ProjectsPage, AboutPage, ContactPage)
- `config/` - site and nav configuration
- `data/` - static content (home, projects, about, contact)
- `hooks/` - reusable hooks (useMobileDrawer, useProjectFilter, useToast)
- `services/` - helpers (clipboard, contact)
- `types/` - domain types (project, about, contact)
- `styles/` - global styles (`globals.css` + `tokens.css` shim). Canonical design tokens are in `packages/design-tokens/tokens.json` (see `packages/design-tokens/README.md`)
- `main.tsx` + `App.tsx` - entry and router shell

## Conventions
- Use ESM `import`/`export` syntax.
- Use `.tsx` for components and `.ts` for other modules.
- Keep feature data in `data/` and types in `types/`.
