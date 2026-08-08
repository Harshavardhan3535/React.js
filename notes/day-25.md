# Day 25 — API Integration Deep Dive (Axios, Interceptors, Race Conditions)

**Sources:**
1. Advanced session — Axios in useEffect, IIFE pattern, race conditions,
   AbortController
2. "Master Axios in 45 Minutes" — Axios fundamentals, full CRUD example
   with Express backend

## What it is
Axios is a Promise-based HTTP client (simpler syntax than fetch, automatic
JSON parsing, built-in error handling, supports interceptors and request
cancellation). Also covered advanced patterns: using async code inside
useEffect via IIFE, and preventing race conditions with AbortController.

## Why it exists
Axios reduces fetch's boilerplate (no manual `.json()` call, throws
automatically on bad status). AbortController solves a real bug class:
when multiple requests fire in quick succession (e.g. search-as-you-type),
a slower earlier request can resolve AFTER a faster later one, overwriting
correct data with stale data — a "race condition."

## Key syntax/pattern learned
- Axios instance pattern: `axios.create({ baseURL, timeout })` — write
  the base URL once, use relative paths (`/posts`) everywhere after
- Interceptors: `api.interceptors.request.use(...)` /
  `api.interceptors.response.use(...)` — run automatically before every
  request / after every response, without repeating code per call
  (this is where auth tokens will get attached automatically on Day 29)
- IIFE inside useEffect: `useEffect(() => { (async () => {...})(); }, [])`
  — needed because the useEffect callback itself can't be async directly
- React Strict Mode double-invokes effects in DEV only — this is why
  race conditions become visible/testable locally
- AbortController: `const controller = new AbortController()` →
  pass `{ signal: controller.signal }` to axios → cleanup function calls
  `controller.abort()` — same cleanup-function mechanism as Day 16's
  interval cleanup, applied to canceling in-flight requests instead

## What I built in practice
- Advanced session: search-driven product fetch with AbortController to
  prevent race conditions (had bugs — fixed variable name typo, removed
  a dead early `return` that made all UI JSX unreachable, added missing
  `setLoading(true)` before the request)
- Full CRUD session: Express backend (GET/POST/PUT/DELETE) + React
  frontend using a shared axiosInstance, fetching/creating/updating/
  deleting posts

## Debugging notes (real issues hit — high volume today)
- Repeated bug pattern: destructuring a request's result as one variable
  name (`data`) then referencing a different, undefined name
  (`response.data`) — happened in both the backend and frontend fetch
  logic; always double-check the variable name used in `await` matches
  what's referenced afterward
- Object literal syntax errors: used `=` instead of `:` inside object
  literals passed to axios.put/post (`title="X"` instead of `title: "X"`)
  — this is assignment syntax, invalid inside `{}` object literals, real
  syntax error that prevents compilation
- Function name case mismatch: `onClick={newPost}` referenced a lowercase
  name while the function was defined as `NewPost` (capital N) — JS is
  case-sensitive, these are different identifiers
- Backend `/newPost` route received data but never called `res.json()` —
  frontend's `await` would hang indefinitely with no response ever coming back
- Mismatched routes between frontend and backend (`/newPost/:id` vs
  `/post/:id`) — would 404 silently from the frontend's perspective
- Invalid JSX: bare `attribute="value"` lines used as JSX children — not
  valid syntax anywhere in JSX, children must be text/expressions/elements

## One thing I'd get wrong in an interview
Explaining what a race condition actually is in one sentence: it's not
about the ORDER requests are sent, it's about the order they RESOLVE —
two requests can be sent in the "right" order but the earlier one can
finish LAST if the server responds slower, silently overwriting newer,
correct data with stale data unless something (like AbortController)
cancels the outdated request.