# CLAUDE.md — Project Memory

> Per-project instructions for Claude Code. Universal rules (Git workflow, code-review style,
> PR-splitting, learning, security) live in `~/.claude/CLAUDE.md` and load automatically — don't
> duplicate them here. Keep this file tight; prune anything stale.

## Project
- **Name:** Portale Mobile
- **What it does:** Single-page installable PWA for Portale Restaurant (contemporary Italian, Chelsea NYC) — menus, story, gallery, reservation request.
- **Stack:** Vite 6 · React 18 · TypeScript (strict) · vite-plugin-pwa. No backend.
- **Repo:** https://github.com/joshpled/portale_web (public, default branch `main`)
- **Deploy target:** Vercel — prod on `main`, preview per PR (Git-integrated). Live: https://portaleweb.vercel.app

## Commands
- Install: `npm install`
- Dev: `npm run dev` (no service worker in dev)
- Build: `npm run build` (`tsc -b && vite build`)
- Preview: `npm run preview` (serves the build **with** the SW — use to verify PWA)
- Test: `npm test` (`vitest run`) · watch: `npm run test:watch`
- Typecheck: `npm run typecheck` (`tsc -b --noEmit` — `-b` is required, see Decisions)
- Lint: `npm run lint` (`eslint . --ext .ts,.tsx`)
- DB migrate: n/a (no database)

## Structure
```
public/
  assets/   portale-mark.png, portale-wordmark.png   (logo, used in UI)
  icons/    PWA/app icons, composited from the logo mark (see ARCHITECTURE → Icons)
  photos/   gallery + story + team photos (.webp; see ARCHITECTURE → Photos)
  favicon.png
src/
  main.tsx        React entry; imports index.css
  App.tsx         phone frame + section order + wires the two hooks
  index.css       keyframes, resets, scroll-reveal CSS, reduced-motion
  components/      UI sections + Lightbox (modal photo viewer)
  data/menus.ts    typed menu + gallery content (the only "data")
  hooks/           useReveal (IntersectionObserver), useStickyBar
  lib/scroll.ts    scrollToId() smooth-scroll helper
  test/setup.ts    jsdom stubs (matchMedia, scrollTo) for Vitest
vite.config.ts    React plugin + VitePWA (manifest, Workbox runtime caching)
```
Deeper map + the "why" lives in `ARCHITECTURE.md`.

## Conventions
- Runtime / package manager: Node 20, **npm** (`package-lock.json`).
- Formatting: no Prettier; ESLint is the only style gate.
- Naming: components `PascalCase.tsx`, hooks `useX.ts`.
- Imports: **relative** paths — no `@/` alias configured.
- Styling: components use **inline styles ported 1:1 from the original Claude Design**. Only keyframes / resets / scroll-reveal / reduced-motion live in `index.css`. Pseudo-states (`:hover`, `:focus-visible`) that inline styles can't express go in `index.css` keyed by class.
- Data / state: plain function components + hooks; section content is typed data in `src/data/menus.ts`. No global state library.

## Environment & secrets
- No `.env` today — fully static, no backend, no API keys. Reservation flow is local-only (no submit).
- If a backend is added later, secrets live in the Vercel dashboard — never printed, logged, or committed.

## Don't touch / danger zones
- Inline component styles mirror the original design pixel-for-pixel — change them deliberately, not casually.
- Service worker is generated only by `vite build` (off in dev). Verify PWA changes with `npm run build && npm run preview`.
- App icons are generated from `public/assets/portale-mark.png` — regenerate via the ImageMagick block in `ARCHITECTURE.md`, don't hand-edit.

## Definition of done (per feature)
- [ ] Typecheck + lint pass
- [ ] Tests added/updated and green
- [ ] No secrets committed
- [ ] Docs updated in the same PR (README / ARCHITECTURE.md / this file)
- [ ] PR title + description explain what **and** why
- [ ] Comprehension summary + questions done (per global rules)

## Decisions log
> Newest on top. date — decision — why — gotchas.

- **2026-06-30 — Gallery lightbox uses `position: fixed`, not `absolute` (PR #7).** The phone frame (`App.tsx`) is `overflow:hidden`, so an absolute overlay would be clipped to the frame and scroll away with the page. Fixed pins to the viewport. Lightbox is a reusable modal (`role=dialog`, `aria-modal`); closes on backdrop/✕/Escape; locks body scroll; restores focus to the trigger via `document.activeElement` captured in the effect. Gotcha: not a full focus-trap yet (Tab can leave) — fine for a 2-control modal.
- **2026-06-30 — Gallery is 6 tiles for a balanced grid (PR #6).** 2-col grid with two `tall` tiles that span 2 rows; 4 tiles left column two short by 2 rows (ragged). Two short tiles even both columns to 4 rows. Gotcha: append order matters for CSS-grid auto-placement.
- **2026-06-30 — Real photos sourced from the restaurant's own site (PR #5).** Pulled from portalerestaurant.com (getbento/imgix CDN) as `webp` via the CDN's `fm=webp` param — no local convert step. `GALLERY_TILES` gained optional `src`+`alt`; a tile with no `src` falls back to its CSS placeholder (graceful degradation). Team headshots overlay the AP/JG monogram with an `onError` hide. Gotcha: name→photo mapping was verified against the about-page DOM, not guessed (two near-identical filenames).
- **2026-06-30 — Test stack is Vitest 3 + jsdom + Testing Library (PR #4).** Vitest 3 reuses Vite 6 (single toolchain, audit clean). Required CI check is `typecheck · lint · test · build`. Gotcha: jsdom lacks `matchMedia`/`IntersectionObserver`/`scrollTo` — stubbed in `src/test/setup.ts`.
- **2026-06-30 — `typecheck` must be `tsc -b --noEmit`, not `tsc --noEmit` (PR #1).** The root `tsconfig` is solution-style (project references), so plain `tsc --noEmit` is a silent no-op and catches nothing. `-b` (build mode) walks the referenced projects.
- **2026-06-30 — Ported the Claude Design to Vite + React + TS PWA (initial build).** Source: Claude Design `Portale Mobile.dc.html`. Inline styles kept 1:1 with the design; the whole UI renders inside a centered max-width 440px "phone frame". `main` protected from day one (PR + CI required).
