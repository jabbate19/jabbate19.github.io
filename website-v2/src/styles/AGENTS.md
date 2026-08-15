# AGENTS.md

- `globals.css` - base + layout globals (imports `tokens.css`)
- `tokens.css` - **shim** that re-exports `@personal-brand/design-tokens` (canonical tokens live in `packages/design-tokens/tokens.json` → `dist/tokens.css`). Do not edit hex values here; edit `packages/design-tokens/tokens.json` and run `npm run build:tokens` from repo root.
- Canonical source: `packages/design-tokens/tokens.json` (see `packages/design-tokens/README.md`)
