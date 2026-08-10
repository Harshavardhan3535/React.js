# Day 27 — Redux Toolkit Part 2 (createAsyncThunk, Full CRUD)

**Source:** Full-length Redux Toolkit course project — Create/Read/Update/Delete
with search and gender filtering, backed by a mock API

## What it is
createAsyncThunk automates the pending/fulfilled/rejected action pattern for
async operations, replacing manual loading/error/data useState management
(Day 18's pattern) with Redux-managed state.

## Why it exists
Reducers must stay synchronous and pure — createAsyncThunk provides a
structured way to dispatch async operations (API calls) while still
updating the store through proper actions, keeping the async logic
separate from the UI layer entirely.

## Key syntax/pattern learned
- `createAsyncThunk("actionName", async (arg, { rejectWithValue }) => {...})`
  — auto-generates pending/fulfilled/rejected action types
- `extraReducers` handles a slice's response to actions defined OUTSIDE its
  own `reducers` block (i.e. the thunk's auto-generated actions) — builder
  callback syntax (`(builder) => builder.addCase(...)`) is the modern/
  recommended form over the older object-map syntax (`{[actionType]: fn}`)
- Full CRUD flow: dispatch(createUser(data)) on form submit → useNavigate
  to redirect after success → dispatch(showUser()) on mount to load list →
  dispatch(deleteUser(id)) / dispatch(updateUser(data)) for the rest
- Search/filter pattern: local input state syncs to a Redux `searchData`
  field via a small dispatched action, list component filters against it
  with `.filter()` chains (reused from Day 8/Day 12 array method patterns)
- Dynamic edit route: `useParams()` pulls the id from the URL, pre-fills
  a form by finding the matching user from the already-loaded Redux state

## What I built in practice
- Full CRUD app: Create (form + validation via required attrs), Read (list
  + search + gender radio filter + view modal), Update (pre-filled edit
  form), Delete — all state-managed through Redux, no local useState for
  the actual data itself (only for form-in-progress values)

## Debugging notes (real issues hit)
- `<Link>` used without a required `to` prop as a fake button for Delete —
  Link is for navigation specifically; a plain `<button>` with onClick is
  the correct choice when there's no actual route to navigate to
- CustomModal would crash (`Cannot read property 'name' of undefined`) if
  the matching user array came back empty — needed a guard before
  accessing `singleUser[0].name`
- Same gap as Day 18: thunks only caught JSON-parsing failures, not failed
  HTTP status codes — fetch() doesn't throw on 404/500 by itself, so a
  failed request with a valid JSON error body would be silently treated
  as success. Needed an explicit `response.ok` check before parsing.

## One thing I'd get wrong in an interview
Assuming `fetch()` inside a thunk automatically triggers the `rejected`
case on any API error — it only does if something actually throws (network
failure or a manually thrown error). A 404/500 with a parseable JSON body
will silently flow into the `fulfilled` case unless you explicitly check
`response.ok` and throw/reject yourself.