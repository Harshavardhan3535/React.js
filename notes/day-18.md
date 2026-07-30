# Day 18 — Fetch API in React

**Video:** REACT 18 [Fetch API in React] — 1h08

## What it is
Using the browser's fetch() API inside useEffect to load data from a real
network endpoint into component state, with proper loading/error/success
handling.

## Why it exists
Real apps need live data from a server, not hardcoded arrays. fetch()
returns a Promise; combined with useEffect (runs once on mount with []),
this is the standard pattern for loading data when a component first renders.

## Key syntax/pattern learned
- fetch() returns a Promise — resolve with `.then()`/`.catch()`, or use
  async/await with try/catch/finally (used async/await here, matches
  backend experience)
- Standard 3-state pattern: `loading`, `error`, and the actual `data` —
  each needs its own useState
- `response.ok` check before parsing — fetch() only rejects on network
  failure, NOT on HTTP error codes like 404/500, so `if (!response.ok)`
  is required to catch those explicitly
- `.map()` inside JSX requires an explicit `return` (or no braces at all
  for implicit return) — forgetting this silently renders nothing

## What I built in practice
- FetchData component pulling from dummyjson.com/products with full
  loading/error/success states using async/await

## Debugging note (real issue I hit)
Two real bugs: (1) referenced `error`/`setError` state without ever
declaring it with useState — would crash on render. (2) `.map()` callback
used `{}` without a `return`, so nothing rendered even though data loaded
successfully — a classic "silent failure," no error thrown, just an
empty list.

## One thing I'd get wrong in an interview
Forgetting that `fetch()` does NOT reject on HTTP error statuses (404,
500, etc.) — only on true network failures (no internet, DNS failure).
Must manually check `response.ok` and throw an error yourself to catch
bad HTTP responses in the catch block.