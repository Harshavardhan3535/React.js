# Day 22 — useParams & useNavigate (URL Params as State)

**Source:** Multiple YouTube tutorials (10-20 min each) covering useParams
and useNavigate through different examples — no single video followed
start to finish

## What it is
useParams and useNavigate are both about treating the URL as a source of
state — useParams reads dynamic values out of the URL path (e.g. an id),
useNavigate lets you change the URL/redirect from code instead of only
through user clicks.

## Why it exists
Some state belongs in the URL, not useState — anything that should be
shareable/bookmarkable/refresh-safe (like which book you're viewing) works
better as a URL param than as component memory. useNavigate is needed for
navigation that isn't a direct user click — after a form submits, after
login succeeds, redirecting when unauthorized.

## Key syntax/pattern learned
- `useParams()` — reads dynamic segments from the route path
  (`path=":id"` → `const { id } = useParams()`)
- `useNavigate()` — returns a function to navigate programmatically:
  `navigate('/dashboard')`, `navigate(-1)` (go back), `navigate('/path', { replace: true })`
- Connects to yesterday's `useSearchParams` — both are "URL as state,"
  just useParams is for required/structural route values (an id), while
  useSearchParams is for optional/flexible values (filters, sort, page)
- Protected Routes (conceptual, not yet built): a wrapper component that
  checks a condition and either renders `<Outlet/>` or redirects via
  `<Navigate to="/login"/>` — this is the ROUTING mechanism only; it's
  separate from actual authentication logic (Day 29), which just plugs
  a real "is this user logged in" check into the same wrapper

## What I built in practice
- Watched multiple tutorials on useParams and useNavigate across
  different examples to build a broader mental model of each hook
- Built all three pieces hands-on: a component reading `id` via
  useParams, a login button redirecting via useNavigate, and a
  ProtectedRoute wrapper (hardcoded isAuthenticated boolean) guarding
  a Dashboard route — confirmed it redirects to /login when false and
  renders when true

## One thing I'd get wrong in an interview
Thinking Protected Routes ARE authentication — they're not. The Protected
Route component is just a conditional redirect wrapper; the actual
"is this user really authenticated" logic (checking a token, calling an
API) is separate and gets plugged into the same wrapper on Day 29.