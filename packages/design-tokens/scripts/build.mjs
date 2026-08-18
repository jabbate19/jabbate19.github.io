#!/usr/bin/env node
/**
 * Build design tokens from tokens.json -> dist artifacts
 * - dist/tokens.css  — :root custom properties + base resets (for website-v2 + slides)
 * - dist/_tokens.scss — SCSS $variables (for reveal.js theme SCSS)
 * - dist/tokens.ts   — typed TS const (for React consumers)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const src = JSON.parse(readFileSync(resolve(root, 'tokens.json'), 'utf8'));
const { color: c, radius: r, font: f, focus, layout: l, type: t } = src;

mkdirSync(resolve(root, 'dist'), { recursive: true });

// ---- tokens.css ----
const typeScale = t?.scale ?? {}
const css = `:root{
  --bg:${c.bg};
  --surface:${c.surface};
  --surface-2:${c.surface2};
  --surface-2-alt:${c.surface2Alt};
  --fg:${c.fg};
  --muted:${c.muted};
  --border:${c.border};
  --accent:${c.accent};
  --accent2:${c.accent2};
  --danger:${c.danger};
  --r:${r.r};
  --sans:${f.sans};
  --mono:${f.mono};
  --focus:${focus.ring};
  --nav-h:${l.navH};
  --text-xs:${typeScale.xs ?? '11px'};
  --text-sm:${typeScale.sm ?? '12px'};
  --text-base:${typeScale.base ?? '14px'};
  --text-base-lg:${typeScale.baseLg ?? '15px'};
  --text-lg:${typeScale.lg ?? '16px'};
  --text-xl:${typeScale.xl ?? '18px'};
  --text-h2:${typeScale.h2 ?? '22px'};
  --text-h2-about:${typeScale.h2About ?? '20px'};
  --text-h1-hero:${typeScale.h1Hero ?? 'clamp(36px,5vw,52px)'};
  --text-h1-about:${typeScale.h1About ?? 'clamp(40px,6vw,58px)'};
  /* reveal aliases */
  --r-accent:${c.accent};
  --r-accent2:${c.accent2};
  --r-muted:${c.muted};
  --r-border:${c.border};
  --r-surface:${c.surface};
  --r-surface-2:${c.surface2};
}
*{box-sizing:border-box;margin:0;padding:0}
html{scrollbar-gutter:stable;color-scheme:dark}
html,body{background:var(--bg);color:var(--fg);font-family:var(--sans);-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
:focus{outline:none}
:focus-visible{box-shadow:var(--focus);border-radius:6px}
::selection{background:${c.selectionBg}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{transition:none!important;animation:none!important}
}
`;
writeFileSync(resolve(root, 'dist/tokens.css'), css);

// ---- _tokens.scss ----
const scss = `// AUTO-GENERATED — edit tokens.json then run npm run build -w @personal-brand/design-tokens
// Shared tokens for reveal.js portfolio theme + any SCSS consumer
$bg: ${c.bg};
$surface: ${c.surface};
$surface-2: ${c.surface2};
$surface-2-alt: ${c.surface2Alt};
$fg: ${c.fg};
$muted: ${c.muted};
$border: ${c.border};
$accent: ${c.accent};
$accent2: ${c.accent2};
$danger: ${c.danger};
$r: ${r.r};
$sans: ${f.sans};
$mono: ${f.mono};
$nav-h: ${l.navH};
$text-xs: ${typeScale.xs ?? '11px'};
$text-sm: ${typeScale.sm ?? '12px'};
$text-base: ${typeScale.base ?? '14px'};
$text-base-lg: ${typeScale.baseLg ?? '15px'};
$text-lg: ${typeScale.lg ?? '16px'};
$text-xl: ${typeScale.xl ?? '18px'};
$text-h2: ${typeScale.h2 ?? '22px'};
$text-h2-about: ${typeScale.h2About ?? '20px'};
$text-h1-hero: ${typeScale.h1Hero ?? 'clamp(36px,5vw,52px)'};
$text-h1-about: ${typeScale.h1About ?? 'clamp(40px,6vw,58px)'};
$selection-bg: ${c.selectionBg};
$selection-fg: ${c.selectionFg};

// CSS custom properties (mirrors tokens.css for SCSS :root injection)
:root{
  --bg:#{$bg};
  --surface:#{$surface};
  --surface-2:#{$surface-2};
  --surface-2-alt:#{$surface-2-alt};
  --fg:#{$fg};
  --muted:#{$muted};
  --border:#{$border};
  --accent:#{$accent};
  --accent2:#{$accent2};
  --danger:#{$danger};
  --r:#{$r};
  --sans:#{$sans};
  --mono:#{$mono};
  --nav-h:#{$nav-h};
  --text-xs:#{$text-xs};
  --text-sm:#{$text-sm};
  --text-base:#{$text-base};
  --text-base-lg:#{$text-base-lg};
  --text-lg:#{$text-lg};
  --text-xl:#{$text-xl};
  --text-h2:#{$text-h2};
  --text-h2-about:#{$text-h2-about};
  --text-h1-hero:#{$text-h1-hero};
  --text-h1-about:#{$text-h1-about};
  --r-accent:#{$accent};
  --r-accent2:#{$accent2};
  --r-muted:#{$muted};
  --r-border:#{$border};
  --r-surface:#{$surface};
  --r-surface-2:#{$surface-2};
}
`;
writeFileSync(resolve(root, 'dist/_tokens.scss'), scss);
writeFileSync(resolve(root, 'dist/tokens.scss'), scss); // alias without underscore for convenience

// ---- tokens.ts ----
const ts = `// AUTO-GENERATED — edit tokens.json then run npm run build -w @personal-brand/design-tokens
export const tokens = ${JSON.stringify(src, null, 2)} as const;
export type Tokens = typeof tokens;
export const cssVars = {
  bg: 'var(--bg)',
  surface: 'var(--surface)',
  surface2: 'var(--surface-2)',
  fg: 'var(--fg)',
  muted: 'var(--muted)',
  border: 'var(--border)',
  accent: 'var(--accent)',
  accent2: 'var(--accent2)',
} as const;
`;
writeFileSync(resolve(root, 'dist/tokens.ts'), ts);

console.log('✓ design-tokens built: dist/tokens.css, dist/_tokens.scss, dist/tokens.ts');
