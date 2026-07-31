# Day 19 — Fetch API Continuation & useRef Hook

**Video:** REACT 19 [Fetch API Continuation] — 56m
**Video:** REACT 20 [useRef() Hook] — 1h04

## What it is
Continued Fetch API (API endpoints, status codes, fetch as a Promise).
Introduced useRef — a hook that lets you access/manage a value or DOM
element directly WITHOUT triggering a re-render when it changes.

## Why it exists
useState triggers a re-render on every change — sometimes you need to
track or access something (a DOM element, a timer ID, a value between
renders) without causing the component to re-render every time. useRef
solves that.

## Key syntax/pattern learned
- `fetch()` returns a Promise; response has HTTP status codes to check
  (building on Day 18's `response.ok` check)
- `const myRef = useRef(null)` — creates a ref object with a `.current` property
- `ref={myRef}` on a JSX element attaches the ref to that real DOM node
- `myRef.current.focus()` — direct DOM method access via the ref
- Core distinction: useState changes → re-render; useRef changes → no re-render

## What I built in practice
- LoginForm with a focus button using useRef to programmatically focus
  an input field

## Debugging note (real issue I hit)
Initial version used a `<label>` element instead of an actual `<input>` —
labels are just descriptive text and can't receive focus or hold a ref
meaningfully. Also had `inputRef` declared but never attached via
`ref={inputRef}`, and no button to actually trigger `focusOnInput`. Fixed
by adding a real `<input>`, attaching the ref, and wiring a button's
onClick to call the focus function.
- Also caught an import path reaching into a different day's folder
  (`../../DAY17/...`) — fixed by keeping the component local to Day 19's
  own `src/components/` folder, since cross-day imports break once
  folders move or get pushed to the real repo separately.

## One thing I'd get wrong in an interview
Trying to attach a ref to something that isn't a real DOM element (like
a `<label>` in this case) — refs to native elements only work on actual
DOM-producing tags (input, div, button, etc.), and `.current` gives you
the underlying DOM node, not a React abstraction.