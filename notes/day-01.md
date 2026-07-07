# Day 1 — React Revolution + Project Setup

**Video:** REACT 01 [The React Revolution] — 1h30
**Practice:** 30 min

## What it is
React is a JavaScript library for building user interfaces using components —
reusable, self-contained pieces of UI — instead of manually manipulating the
DOM with plain JavaScript.

## Why it exists
Manually updating the DOM (document.getElementById, innerHTML, etc.) gets
messy and error-prone as an app grows. React handles re-rendering efficiently
by tracking what changed and updating only that part of the page.

## Key syntax/pattern learned
- Scaffolded a React app using Vite: `npm create vite@latest . -- --template react`
- JSX must always have balanced tags — every opening tag needs its exact
  matching closing tag, including fragments (`<>...</>`)
- A single missing or mismatched tag breaks everything nested after it,
  not just that one element

## What I built in practice
- Set up a fresh Vite + React project from scratch
- Ran the dev server and confirmed hot module reload (HMR) works
- Deliberately broke the JSX structure (removed a closing tag) to see
  what the error looked like, then fixed it by tracing the terminal
  output line by line

## Debugging note (real issue I hit)
Deleted a `<div>` but the file still had a `<section>` expecting its own
closing tag. Vite's error output pointed to exactly which tag was
unmatched (`Expected corresponding JSX closing tag for 'section'`) —
learned to read that error top to bottom instead of guessing.

## One thing I'd get wrong in an interview
Assuming a JSX error is caused by the line the error message points to —
often the *real* problem is an earlier tag that never got closed properly,
and the error is just where the parser finally gave up.