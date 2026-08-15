# AGENTS.md — personal-brand monorepo

## Layout
- `website-v2/` — site app (see `website-v2/AGENTS.md`)
- `slides-template/` — reveal.js fork; portfolio theme `css/theme/portfolio.scss` sources shared tokens
- `slides-template/react/` — `@revealjs/react` wrapper (see `slides-template/react/AGENTS.md`)
- `packages/design-tokens/` — **canonical** tokens (source `tokens.json`, generated `dist/*`). See `packages/design-tokens/README.md`.

## Token workflow
- Edit `packages/design-tokens/tokens.json` → `npm run build:tokens` → rebuild consumers (`npm run build -w website-v2`, `npm run build:styles -w reveal.js`). Do not patch hexes in consumers.

## Workspaces
- Root `package.json` workspaces: `website-v2`, `slides-template`, `slides-template/react`, `packages/*`
- `npm --cache /tmp/npm-cache install` at root links local `@personal-brand/design-tokens`. Per-project builds also work standalone via relative imports (`../../../packages/...`).

## Backups & history
- Pre-migration snapshots in `.backup/` (tars + copies). Original `website-v2/.git` and `slides-template/.git` preserved; root is not a git repo by default (no history rewrite).
