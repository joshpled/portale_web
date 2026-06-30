# Portale Mobile

Installable mobile (PWA) site for **Portale Restaurant** — contemporary Italian, Chelsea NYC.
Ported from a Claude Design (`Portale Mobile.dc.html`) into Vite + React + TypeScript.

A single scrolling mobile page: hero → lunch & brunch → explore grid → menus
(dinner / lunch / brunch / happy hour) → story → gallery → reservation request →
visit/hours → more links → footer. Scroll-reveal animations and a sticky top bar.

## Stack

- **Vite 6** + **React 18** + **TypeScript** (strict)
- **vite-plugin-pwa** (Workbox) — installable, offline app shell
- No backend. The reservation form is a local "request" with a confirmation message.

## Commands

```bash
npm install      # install deps
npm run dev      # dev server (http://localhost:5173)
npm run build    # typecheck (tsc -b) + production build → dist/
npm run preview  # serve the built dist/ locally
npm run lint     # eslint
npm run typecheck
```

## Install as an app ("Add to Home Screen")

The site is a PWA, so it installs to the home screen and runs full-screen with no
browser chrome. **The service worker only runs in a production build**, so test
installability with `npm run build && npm run preview` (not `npm run dev`).

- **iPhone / iPad (Safari):** Share → **Add to Home Screen**. Uses the
  `apple-touch-icon` and `apple-mobile-web-app-*` meta tags in `index.html`.
- **Android (Chrome):** the **Install app** prompt / ⋮ menu → **Install app**.
  Driven by `manifest.webmanifest` (`display: standalone`, maskable icon).

PWA install requires HTTPS (or `localhost`). On a deployed host it works over HTTPS automatically.

## Icons

PWA/app icons in `public/icons/` are generated from `public/assets/portale-mark.png`
(brand background `#163b46`). To regenerate after changing the mark, see
`ARCHITECTURE.md` → *Icons*.

## Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md).
