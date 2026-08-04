# Day 21 — React Router (Setup, Routes, Nested Routes, Dynamic Routes)

**Source:** Self-taught (no TAP video) — Web Dev Simplified "Learn React Router v6 In 45 Minutes" + reactrouter.com docs

## What it is
React Router enables client-side navigation between different "pages"
within a single-page app, without a full browser reload. Covers route
setup, navigation links, nested/layout routes, dynamic route parameters,
and search params.

## Why it exists
A real app needs multiple views (Home, Book List, Book Detail) without
losing React state or re-downloading the whole page on every navigation —
Router intercepts navigation and swaps components client-side.

## Key syntax/pattern learned
- `<Routes>` / `<Route path="..." element={<X/>} />` — maps URL paths to components
- `<Link to="/path">` — client-side navigation, no page reload (NOT `<a href>`)
- `<NavLink>` — same as Link, but supports active-state styling via
  `className`/`style` function: `({isActive}) => isActive ? {...} : {}`
- Nested/layout routes: a parent `<Route>` wrapping child `<Route>`s, with
  `<Outlet/>` in the parent's component marking where the matched child renders
- `index` route — the default child route when the parent path matches exactly
- Dynamic route params: `<Route path=":id" element={<Book/>}/>` — accessed
  via `useParams()` inside the component
- `useSearchParams()` — reads/writes URL query parameters (`?n=3`), keeps
  state synced with the URL itself
- Router types: BrowserRouter (clean URLs, needs server config for deep
  links), HashRouter (URLs with #, works without server config), MemoryRouter
  (testing/non-browser), StaticRouter (server-side rendering only)

## What I built in practice
- Book app structure: Home, BookList (nested under /books), dynamic
  Book detail route (:id), NewBook route, NotFound wildcard route,
  BookLayout with Outlet + useSearchParams

## Debugging notes (real issues hit)
- Used lowercase `<link>` instead of `<Link>` / `<Navlink>` instead of
  `<NavLink>` — lowercase versions are actual HTML tags (or nothing),
  not the Router components, so navigation silently did nothing
- Placed `//` comments directly inside JSX markup (`<Route .../> //comment`)
  — JSX only supports `{/* */}` comments inline; `//` after a tag is a
  syntax error and breaks the build
- Referenced `location.state` without importing/calling `useLocation()` —
  undefined variable, throws ReferenceError
- Missing imports for BookLayout, Book, NotFound components in App.jsx
- Missing `useState` import in BookLayout.js despite using it
- Had both `.js` and `.jsx` duplicate versions of App and main/index files
  coexisting — only one is actually used by Vite, the other is dead code
  causing confusion about which file is "real"

## One thing I'd get wrong in an interview
Assuming `<Route path="/books">` alone renders BookList — without an
`index` route or a matching child route, a parent Route with children
only renders its own `element` (often a layout with `<Outlet/>`); the
actual content comes from whichever child route matches.