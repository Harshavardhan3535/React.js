# Day 29 — Authentication (JWT, Access & Refresh Tokens)

**Source:** "Authentication in React with JWTs, Access & Refresh Tokens
(Complete Tutorial)"
**Status:** Concept understood, reference code fixed and correct.
Practice build against real User Auth API deferred to post-30-day
cleanup session (along with TechStore and Day 22's Protected Route
practice verification).

## What it is
A production-grade auth pattern using a short-lived access token (kept
in React memory/state only) plus a long-lived refresh token (stored in
an httpOnly cookie, invisible to JavaScript). Interceptors handle
attaching the access token to requests and silently refreshing it when
it expires.

## Why it exists
localStorage is readable by any JavaScript on the page, including
injected/malicious scripts (XSS) — a token there is an easy target.
Keeping the access token in memory (not localStorage) reduces that
surface, but means it's lost on page refresh — the refresh token
(httpOnly cookie, not readable by JS at all even during XSS) solves
that by letting the app silently re-fetch a new access token on load.

## Key syntax/pattern learned
- Access token: short-lived (~15min), lives in React state only, used
  for actual API requests
- Refresh token: long-lived (~30 days), lives in an httpOnly cookie,
  used only to silently regenerate a new access token
- Backend owns refresh token verification entirely; React only ever
  handles the access token
- `useLayoutEffect` (not useEffect) for interceptor setup — runs
  synchronously before paint, appropriate here since interceptors need
  to be in place before any request could fire
- Request interceptor attaches `Authorization: Bearer <token>` to every
  outgoing request
- Response interceptor catches 403 Unauthorized, silently calls a
  refresh endpoint, retries the original failed request once with the
  new token (`_retry` flag prevents infinite retry loops)
- Interceptor cleanup: `api.interceptors.request.eject(id)` — same
  cleanup-function principle as Day 16's interval cleanup, applied to
  interceptors instead

## What I built in practice
- Reviewed and fixed a complete AuthContext reference implementation
  (typos: `await-api` → `await api`, `ubterceptors` → `interceptors`,
  missing `?.[entity]` spacing; structural bug: AuthProvider was
  returning an empty function instead of `<AuthContext.Provider>`,
  meaning children were never rendered and the provider never worked)
- Did NOT yet build/run a working version against the real User Auth
  API — planned for the post-30-day cleanup session, using the simpler
  single-access-token-in-localStorage pattern (matches Days 15-17's
  existing localStorage work) rather than the full httpOnly-cookie
  refresh flow, since that requires backend changes not yet made

## One thing I'd get wrong in an interview
Assuming localStorage and in-memory (state) storage have the same
security properties — they don't. localStorage persists but is fully
exposed to any JS on the page (XSS risk); in-memory state is safer from
that specific risk but doesn't survive a refresh, which is exactly why
the refresh-token-in-httpOnly-cookie pattern exists as the piece that
restores the access token silently after reload.