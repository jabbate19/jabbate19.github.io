# React + TypeScript + Vite — website-v2

Part of the `personal-brand` monorepo (see `../README.md` / `../AGENTS.md`).

- **Design tokens are shared.** Canonical source is `../packages/design-tokens/tokens.json`. `src/styles/tokens.css` is a shim re-exporting `@personal-brand/design-tokens/dist/tokens.css`. Do not edit palette hexes here; edit `tokens.json` and run `npm run build:tokens` from repo root.
- **Builds remain separate** but also work via root workspaces:
  ```bash
  npm run build -w website-v2        # standalone (also: npm --prefix website-v2 run build)
  npm run dev -w website-v2
  npm run lint -w website-v2
  ```
  Root `npm --cache /tmp/npm-cache install` links `@personal-brand/design-tokens`.

## Vite template notes

This project was bootstrapped from the Vite React + TS template. Two plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs)

See `../packages/design-tokens/README.md` for token workflow and `src/styles/AGENTS.md` for style ownership.
