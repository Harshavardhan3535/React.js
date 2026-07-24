# Day 13 — Pushing Project to Git & Hosting on Vercel

**Video:** REACT 13 [Pushing Project to Git & Hosting on Vercel] — 1h17
**Project:** TechStore (continued from Days 11-12, functionality still finishing)

## What it is
Covered deployment workflow (Git push → Vercel hosting) plus two additional
TechStore features: positioning with z-index, and a dark/light mode toggle.

## Why it exists
Position + z-index control visual stacking (e.g. a badge overlapping an
icon). Dark/light mode is a common real-world UI feature, and a good
practical use of the ternary + state pattern from Day 7/9 combined.

## Key syntax/pattern learned
- `position: relative` / `absolute` / `fixed` + `z-index` for controlling
  element stacking and overlap
- Dark/light mode toggle: single boolean state (`isDarkMode`) driving
  ternary-based inline styles and button text
- Deployment flow: `npm run build` → generates `dist/` → push to GitHub →
  connect repo to Vercel → auto-deploys on every push to main

## What I built in practice
- TechStore functionality still being finished (spilled past Day 12 into
  today) — deployment itself not yet done, will complete once functionality
  is fully working end-to-end

## One thing I'd get wrong in an interview
Forgetting that `position: absolute` positions relative to the nearest
*positioned* ancestor (i.e. an ancestor with position set to anything
other than static) — not necessarily the immediate parent, and not the
whole page, unless no positioned ancestor exists up the tree.