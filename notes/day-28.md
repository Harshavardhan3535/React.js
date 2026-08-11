# Day 28 — TanStack Query (useQuery, useMutation, Query Invalidation)

**Source:** Full TanStack Query tutorial (JSX) — watched Setup, useQuery,
DevTools, Query Cache, Stale Time, Mutations, Query Invalidation,
Mutation Response sections. Pagination/Infinite Scroll/Optimistic
Updates sections skipped for today's scope, bookmarked for later.

## What it is
TanStack Query is a library purpose-built for SERVER state — data that
lives on an API, can go stale, and benefits from caching/deduplication —
distinct from CLIENT state (Redux/Context), which is data the app owns
entirely.

## Why it exists
Eliminates most of the manual loading/error/data boilerplate from Day 18
(fetch + useState) and even Day 27 (createAsyncThunk + slice) — for
server data specifically, useQuery/useMutation handle caching, refetching,
and invalidation automatically.

## Key syntax/pattern learned
- `QueryClientProvider` wraps the app — same Provider pattern as Context
  (Day 20) and Redux (Day 26)
- `useQuery({ queryKey, queryFn })` — queryKey is both the cache key AND
  what triggers a refetch when it changes (e.g. `["posts", postId]`)
- Returns `data`, `isLoading`, `isError`, `error`, `isFetching`, `refetch`
- `staleTime` — how long cached data is considered fresh before a
  background refetch happens
- `enabled: false` — disables automatic fetch on mount; must trigger
  manually via `refetch()`
- `useMutation({ mutationFn, onSuccess })` — for POST/PUT/DELETE
- `queryClient.invalidateQueries({ queryKey })` — marks cached data
  stale, triggers automatic refetch (preferred over manually patching
  cache with setQueryData in most cases)
- Compared directly against a hand-written useEffect+useState fetch
  (PostsTraditional) — TanStack Query version has no manual loading/
  error state variables at all

## What I built in practice
- PostsRQ: list + create post via useMutation, comparing directly
  against a traditional useEffect-based fetch version
- PostDetailsRQ: dynamic query using useParams + queryKey with a
  variable (`["posts", postId]`)
- PaginatedQueries: fruit list with page state + keepPreviousData

## Debugging notes (real issues hit — high volume today)
- `Home.js` exported `App` instead of `Home` — wrong identifier entirely,
  broke the import in App.jsx
- `addPost` used `axios.get` instead of `axios.post` — a POST mutation
  that was actually silently sending a GET request with the body ignored
- Duplicate `queryFn` key inside the same useQuery object — second
  silently overwrites the first, dead code left behind
- `queryClient.setQueriesData({"posts"}, ...)` — invalid object shorthand
  syntax AND wrong API (should be `setQueryData(["posts"], updaterFn)`,
  or better, just use `invalidateQueries` to let it refetch cleanly)
- `e.preventDefult()` typo crashed form submission
- PostDetailsRQ repeated the Day 24 nested-component bug (component
  defined inside itself, never called/returned) — plus referenced `data`
  outside the scope where it was actually declared, and was missing the
  axios import entirely
- PaginatedQueries was missing the `useState` import despite using it
- App.jsx had a route `path` set to a file path (`./components/...js`)
  instead of a URL path

## One thing I'd get wrong in an interview
Thinking `invalidateQueries` and `setQueryData` do the same thing —
they don't. `invalidateQueries` marks data stale and triggers a real
refetch from the server (safer, always accurate). `setQueryData`
directly overwrites the cache with data you provide, no network request
— faster/optimistic, but wrong if your manually-constructed data doesn't
exactly match what the server would actually return.