# Architecture

How the Portale mobile PWA fits together. Living map — update when the shape changes.

## Origin

Ported from a Claude Design file, `Portale Mobile.dc.html`. The original used a
proprietary design runtime (`x-dc`, `DCLogic`, `<sc-for>`/`<sc-if>`, `{{ }}`
bindings, `support.js`). That runtime is **not** used here — it was a preview
shell. We re-implemented the same markup, styles, data, and behavior in React so
the result is a real, deployable, installable app with no dependency on the
design tool.

Mapping from the design's concepts to this codebase:

| Design construct                     | Here                                            |
| ------------------------------------ | ----------------------------------------------- |
| `<sc-for>` over `menus`/`gallery`    | `.map()` over typed data in `src/data/menus.ts` |
| `<sc-if>` booked / notBooked         | `booked` state + ternary in `Reserve.tsx`       |
| `{{ goReserve }}` etc. (scroll refs) | `scrollToId('reserve')` in `src/lib/scroll.ts`  |
| `data-reveal` + IntersectionObserver | `useReveal` hook + CSS `[data-reveal]`          |
| sticky topbar opacity on scroll      | `useStickyBar` hook                             |
| inline styles on every element       | inline `style={{}}` objects (kept faithful)     |

## Rendering model

- **One page, many sections.** `App.tsx` renders a fixed 440px-max "phone frame"
  and stacks the sections in order. Navigation is in-page smooth scroll to
  section `id`s — there is no router.
- **Styling is inline**, copied from the source design, so the visual result
  matches 1:1. Only the bits that *can't* be inline live in `src/index.css`:
  `@keyframes` (floating shapes, scroll bob), base resets, the `[data-reveal]`
  fade/slide, and `prefers-reduced-motion` handling.
- **State is local to where it's used.** Menu tab selection lives in `Menus.tsx`;
  reservation fields live in `Reserve.tsx`. Nothing is global, so there's no
  store/context.

## Files

```
public/
  assets/        portale-mark.png, portale-wordmark.png   (logo, used in UI)
  icons/         icon-192/512, maskable-512, apple-touch-icon  (PWA/app icons)
  photos/        gallery + story + team photos (webp)  — see Photos below
  favicon.png
src/
  main.tsx       React entry; imports index.css
  App.tsx        phone frame + section order + wires the two hooks
  index.css      keyframes, resets, reveal CSS, reduced-motion
  data/menus.ts  typed menu + gallery content (the only "data")
  lib/scroll.ts  scrollToId() smooth-scroll helper
  hooks/
    useReveal.ts    IntersectionObserver → adds .is-visible (staggered)
    useStickyBar.ts scroll past hero → show top bar
  components/
    TopBar  Splash  Brunch  ExploreGrid  Menus
    Story   Gallery Reserve  Visit  More   Footer
index.html       meta tags (theme-color, apple-touch-icon, iOS standalone), fonts
vite.config.ts   React plugin + VitePWA (manifest, Workbox runtime caching)
```

## PWA

- `vite.config.ts` → `VitePWA`:
  - `registerType: 'autoUpdate'` — a new SW activates as soon as a new build deploys.
  - `manifest` — name, `display: standalone`, `theme_color #163b46`,
    `background_color #0f2e37`, and the 192/512 + **maskable** icons.
  - `workbox.runtimeCaching` — caches Google Fonts CSS (StaleWhileRevalidate) and
    font files (CacheFirst) so the shell renders offline.
- `index.html` carries the iOS-specific tags Safari needs for "Add to Home
  Screen" (manifest alone isn't enough on iOS): `apple-mobile-web-app-capable`,
  `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title`, and the
  `apple-touch-icon` link.
- The service worker is generated only by `vite build` (disabled in dev). Verify
  with `npm run build && npm run preview`.

## Icons

All app icons are composited from `public/assets/portale-mark.png` on a `#163b46`
background with ImageMagick. To regenerate (run from the project root):

```bash
MARK=public/assets/portale-mark.png
magick -size 512x512 xc:'#163b46' \( "$MARK" -resize 220x300 \) -gravity center -composite public/icons/icon-512.png
magick -size 192x192 xc:'#163b46' \( "$MARK" -resize 82x112  \) -gravity center -composite public/icons/icon-192.png
magick -size 512x512 xc:'#163b46' \( "$MARK" -resize 170x232 \) -gravity center -composite public/icons/maskable-512.png  # extra padding for safe zone
magick -size 180x180 xc:'#163b46' \( "$MARK" -resize 78x106  \) -gravity center -composite public/icons/apple-touch-icon.png
magick -size 64x64   xc:'#163b46' \( "$MARK" -resize 28x38   \) -gravity center -composite public/favicon.png
```

## Photos

Real photography lives in `public/photos/` as `.webp` and is referenced by
absolute path (e.g. `/photos/bar.webp`), matching the logo-asset convention.
Source: the restaurant's own site (`portalerestaurant.com`, served via the
getbento/imgix CDN), downloaded at build-friendly sizes with `fm=webp`
(scenes ~900w, the Story room 1100w, headshots 240×240 square crop).

- **Gallery** tiles are data-driven: `GALLERY_TILES` in `src/data/menus.ts`
  carries an optional `src` + `alt`. A tile with no `src` falls back to its CSS
  placeholder, so the grid degrades gracefully.
- **Story** uses one full-width room photo plus two team headshots. The
  headshots render *over* the initials monogram (`AP` / `JG`); an `onError`
  handler hides a broken image so the initials show through — no JS state needed.
- All `<img>` use `loading="lazy"` + `decoding="async"`.

## Deploy & CI

Static SPA built by `npm run build` → `dist/`. PWA install needs HTTPS, which the
host provides automatically.

**Hosting: Vercel**, connected to the `joshpled/portale_web` GitHub repo (Git
integration). Vercel auto-detects the Vite preset (build `npm run build`, output
`dist`), so there is no `vercel.json`.

- **Production:** https://portaleweb.vercel.app — redeploys on every push/merge to `main`.
- **Previews:** every PR gets its own preview URL (Vercel bot comments it on the PR).
- `.vercel/` (the local project link) is gitignored.

**CI: GitHub Actions** (`.github/workflows/ci.yml`) — runs `typecheck` → `lint` →
`build` on `pull_request` to `main` and `push` to `main`. The job
`typecheck · lint · build` is a **required status check** on `main`, alongside:
PR required, up-to-date branch (`strict`), linear history, conversation
resolution, no force-push/delete — all enforced including for admins.

```
feature/* (off main) → PR ──► CI green + Vercel preview ──► squash merge ──► main: CI + prod deploy
```
```
