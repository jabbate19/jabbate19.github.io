# personal-brand — monorepo

Two React projects with a shared design system. Each builds independently; tokens are centralized.

## Layout
- `website-v2/` — Vite + React 19 site (`npm run build -w website-v2`, `npm run dev -w website-v2`)
- `slides-template/` — reveal.js 6 fork + `react/` wrapper (`@revealjs/react`). Styles via `vite.config.styles.ts`, portfolio theme at `css/theme/portfolio.scss` (`npm run build -w reveal.js`, `npm run build:styles -w reveal.js`)
- `packages/design-tokens/` — **canonical** design tokens (single source of truth). See `packages/design-tokens/README.md`.

## Design tokens
- **Source:** `packages/design-tokens/tokens.json`
- **Generate:** `npm run build:tokens` (or `npm run build -w @personal-brand/design-tokens`) → `dist/tokens.css`, `dist/_tokens.scss`, `dist/tokens.ts`
- **Consumed by:**
  - `website-v2/src/styles/tokens.css` — shim re-exporting `dist/tokens.css`
  - `slides-template/css/theme/portfolio.scss` — `@use '../../../packages/design-tokens/dist/tokens' as dt` → `template/settings` (`dt.$bg`, `dt.$accent`, etc.)

Do not edit hex values in consumers; edit `tokens.json`.

## Workspaces
Root `package.json` workspaces: `website-v2`, `slides-template`, `slides-template/react`, `packages/*`. Root `npm --cache /tmp/npm-cache install` links `@personal-brand/design-tokens` (`"@personal-brand/design-tokens":"*"`). Per-project `npm run build` still works without root install via relative imports.

## Backups
Pre-migration originals preserved in `.backup/` (tars `website-v2-backup-*.tar.gz`, `slides-template-backup-*.tar.gz` + `*-copy/` dirs + `README.md` with restore). Original `.git` histories remain in `website-v2/.git` and `slides-template/.git` (no history rewrite).

## Validation
```bash
npm --cache /tmp/npm-cache install
npm run build:tokens
npm run build -w website-v2
npm run build:styles -w reveal.js
npm run build -w @revealjs/react
```
