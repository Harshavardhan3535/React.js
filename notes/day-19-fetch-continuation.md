# Day 19 — Fetch API Continuation

**Video:** REACT 19 [Fetch API Continuation] — 56m

## What it is
Continued from Day 18's Fetch API introduction — deeper look at API
endpoints, how fetch() behaves as a Promise, and the different types of
HTTP response status codes.

## Why it exists
Knowing how to fetch data is only half the picture — real apps need to
handle the full range of what a server can return (success, client
errors, server errors), not just the happy path.

## Key syntax/pattern learned
- API endpoint: the specific URL a request is sent to
- `fetch()` returns a Promise — its initial state is "pending" until the
  request resolves
- Response has HTTP status codes to check (builds directly on Day 18's
  `response.ok` check, which only covers a general success/fail split —
  today went deeper into what the actual codes mean)

## What I built in practice
- Continued the FetchData component work from Day 18, reinforcing the
  Promise/response-handling pattern

## One thing I'd get wrong in an interview
Treating all non-2xx status codes the same — a 404 (not found) and a 500
(server error) are very different failure modes and often deserve
different handling/messaging, not just a generic "Error" catch-all.