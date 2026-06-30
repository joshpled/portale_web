<!--
Title: use a conventional-commit summary, e.g. `feat: …`, `fix: …`, `chore: …`.
The PR title + description become the squash-merge commit, so write them well.
-->

## What
<!-- What changed, in plain language. -->

## Why
<!-- The reason for the change. Call out non-obvious decisions and tradeoffs. -->

## Preview
<!-- The Vercel bot comments the live preview URL on this PR once the deploy is
     ready — check it before merging. Production: https://portaleweb.vercel.app -->
- Preview URL: _Vercel will post it in a comment below._
- [ ] Verified the change on the preview deploy (renders + works on mobile width)

## Screenshots
<!-- Before / after for any visible change. Delete if not applicable. -->

## Checklist
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Tests added/updated and green (or n/a)
- [ ] No secrets committed
- [ ] Docs updated in this PR (README / ARCHITECTURE / docs) if behavior changed
- [ ] Title + description explain **what** and **why**

> CI (`typecheck · lint · build`) must be green and the branch up to date before merge.
> Squash-merge into `main`; the branch auto-deletes after.
