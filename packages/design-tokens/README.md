# @personal-brand/design-tokens

Single source of truth for color, typography, and surface design across `website-v2` and `slides-template` (reveal.js `portfolio` theme).

## Tokens
- **Edit** [`tokens.json`](./tokens.json) — canonical colors, fonts, radii, glow, etc.
- **Build** artifacts:
  ```bash
  npm run build -w @personal-brand/design-tokens
  # or from repo root: npm run build:tokens
  ```
  Generates:
  - `dist/tokens.css` — `:root` custom properties + base resets (consumed by `website-v2/src/styles/tokens.css` shim)
  - `dist/_tokens.scss` / `dist/tokens.scss` — SCSS `$variables` + `:root` (consumed by `slides-template/css/theme/portfolio.scss` via `@use '../../../packages/design-tokens/dist/tokens' as dt`)
  - `dist/tokens.ts` — typed `tokens` const for React/TS consumers (`slides-template/react`, `website-v2`)

## Consumption
- **website-v2**: `package.json` has `"@personal-brand/design-tokens": "*"` (npm workspaces; per-project also works as `file:../packages/design-tokens`); [`website-v2/src/styles/tokens.css`](../../website-v2/src/styles/tokens.css) is a shim re-exporting `dist/tokens.css` (currently `@import '../../../packages/design-tokens/dist/tokens.css'` so builds work without root install; with root `node_modules` it also resolves as `@personal-brand/design-tokens/tokens.css`).
- **slides-template**: `package.json` same dep; [`css/theme/portfolio.scss`](../../slides-template/css/theme/portfolio.scss) does `@use '../../../packages/design-tokens/dist/tokens' as dt` and maps `dt.$bg`, `dt.$accent`, etc. into `template/settings`. Vite configs (`vite.config.ts`, `vite.config.styles.ts`) add `resolve.alias: {'@personal-brand/design-tokens': '../packages/design-tokens/dist'}` + `scss.includePaths` for SCSS.

## Workflow
1. Change a hex/radius/font in `tokens.json`.
2. `npm run build:tokens` (or `npm run build -w @personal-brand/design-tokens`).
3. Rebuild consumers independently — they keep separate builds:
   ```bash
   npm run build -w website-v2          # or npm run build:website from root
   npm run build -w reveal.js            # slides core
   npm run build -w @revealjs/react      # React wrapper
   # or all: npm run build
   ```

## Design
- Palette: navy `bg #0a1628`, surfaces `#132040`/`#0f2142`, `fg #e6eaf2`, `muted #8a9cc0`, `border #1e335c`, `accent #3b82f6`/`#60a5fa`, `danger #fca5a5`.
- Type: `Inter` (sans/display) + `SFMono-Regular` (mono), `r:8px`, `nav-h:64px`, focus ring `0 0 0 2px var(--bg),0 0 0 4px var(--accent)`.
- Signature: 6px accent dot + dual radial glow on `.reveal-viewport`.

Backups of pre-migration repos are in `.backup/` (tars + directory copies + README).
