# TODO — Portale Mobile

Backlog for the Portale Mobile PWA. Foundation is complete (build, deploy, CI, tests,
PWA, real photos, gallery lightbox — see `CLAUDE.md` → Decisions log for the history).
Items below are unstarted feature/polish work, roughly highest-value first.

> Workflow reminder: `main` is protected. Each item is its own branch
> (`feature|fix|chore|refactor/<slug>`) → PR → CI green → squash merge.
>
> This list is mirrored in session memory (`portale-project-status.md`). Keep both in sync.

## Backlog

- [ ] **Reservation backend.** Form is local-only ("request" with no submit anywhere).
  Wire to a real booking provider (Resy / OpenTable / Tock link) or a form endpoint
  (Formspree / Web3Forms). _Highest value — only genuinely incomplete user flow._
- [ ] **More test coverage.** Currently smoke-level only. Add unit tests for `useReveal`,
  `useStickyBar`, and `scrollToId`.
- [ ] **Custom domain on Vercel.** Replace `portaleweb.vercel.app` with a real domain.
- [ ] **"New version available — reload?" prompt.** SW uses `registerType: autoUpdate`
  (silent swap today). Add an update toast so users can opt into the refresh.
- [ ] **Lightbox focus-trap.** Known gap (PR #7) — Tab can leave the open modal.
  Trap focus within the dialog for full a11y.
- [ ] **SEO / meta.** Open Graph tags, schema.org `Restaurant` structured data, sitemap.
  Improves Google + social-share presence.
- [ ] **Lighthouse / perf audit.** Verify PWA score, image sizing, and LCP; fix whatever
  it surfaces.
- [ ] **Gallery lightbox next/prev nav.** Add swipe + keyboard-arrow navigation between
  photos, not just open/close.
- [ ] **Analytics.** Vercel Analytics or Plausible to see real traffic (privacy approach TBD).
- [ ] **Visit section polish.** Clickable phone (`tel:`), directions link, embedded or
  static map.
- [ ] **GitGuardian as a required check.** Add secret-scanning as a merge gate beyond CI.
