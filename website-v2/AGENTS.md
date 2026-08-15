# AGENTS.md

## Code Map
- `src` - application source (see `src/AGENTS.md`)
- `../packages/design-tokens` - **canonical** design tokens (colors, typography, spacing). `src/styles/tokens.css` is a shim that re-exports from there.
- `../slides-template/css/theme/portfolio.scss` - slide `portfolio` theme that sources the same tokens.

## Monorepo
- Root `package.json` defines npm workspaces: `website-v2`, `slides-template`, `slides-template/react`, `packages/*`.
- Edit tokens in `packages/design-tokens/tokens.json` → `npm run build:tokens` (repo root) → rebuild consumers independently.

## Conventions
- Use ESM `import`/`export` syntax.
- Use `.tsx` extensions for components and `.ts` for other modules.
- Do not hardcode palette hexes in `src/` — use `var(--bg)`, `var(--accent)`, etc. from tokens.
