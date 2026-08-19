# React 30-Day Journey

Daily React learning log — following TAP Academy's React course, with additional
topics (Router, Redux Toolkit, TanStack Query, Auth) covered after.

## Structure
- Each folder is organized by **topic/project**, not by day number, since some
  topics (like the TechStore project) span multiple days.
- `notes/` contains daily learning notes — what was covered, what was built,
  and one thing I'd want to be able to explain in an interview.

## Milestones
- ✅ **Days 1-20**: TAP Academy React syllabus complete
- ✅ **Days 21-30**: Gap topics complete (React Router, Forms, Redux Toolkit, TanStack Query, Authentication, Performance)
- 🔄 **Cleanup session (pending)**: Finish TechStore (Days 11-13), verify/rebuild Day 22 Protected Routes practice, build Day 29 Auth practice against real API, general Days 1-20 bug sweep

## Progress

| Folder | Topic | Status |
|---|---|---|
| `01-jsx-basics` | React setup, JSX rules | ✅ Done |
| `02-jsx-rules` | JSX deep dive, embedding expressions | ✅ Done |
| `03-components` | Components as functions, building blocks of React | ✅ Done |
| `04-reusable-components` | Reusable/nested components, modules (export/import) | ✅ Done |
| `05-props` | Props (passing data), named vs default exports | ✅ Done |
| `06-props-destructuring` | Array/object destructuring, aliasing, nested destructuring | ✅ Done |
| `07-conditional-rendering` | Default props, children prop, conditional rendering, deployment basics | ✅ Done |
| `08-rendering-arrays` | Rendering lists with .map(), key prop rules | ✅ Done |
| `09-state` | useState introduction, counter component, functional updater | ✅ Done |
| `10-controlled-components` | Rules of Hooks, controlled form inputs, UserForm assignment | ✅ Done |
| `11-13-techstore-project` | TechStore — product grid, cart + wishlist with localStorage persistence, search/brand/sort filtering | ✅ Done |
| `14-useeffect-localstorage` | useEffect basics, dependency array, localStorage persistence | ✅ Done |
| `15-localstorage-nodejs` | localStorage concept, JSON.stringify/parse for object storage | ✅ Done |
| `16-useeffect-cleanup` | useEffect cleanup function, Persistence Counter + Timer mini projects | ✅ Done |
| `17-cart-persistence` | Cart persistence pattern (localStorage + JSON), Timer bug fix continued | ✅ Done |
| `18-fetch-api` | Fetch API with async/await, loading/error/success states | ✅ Done |
| `19-fetch-continuation-useref` | Fetch API continuation (status codes) + useRef hook (DOM access, scrollIntoView) | ✅ Done |
| `20-context-api` | Prop drilling problem, Context API (createContext/useContext) | ✅ Done |
| `21-react-router-basics` | React Router — Routes, Link/NavLink, nested routes, dynamic params, useSearchParams | ✅ Done |
| `22-router-navigation-protected` | useParams, useNavigate, Protected Route pattern (hardcoded auth check) | ✅ Done |
| `23-forms-validation` | Multi-field controlled forms, validation, error handling | ✅ Done |
| `24-react-hook-form` | React Hook Form (register, validation rules) vs hand-built useState form | ✅ Done |
| `25-axios-api-integration` | Axios (instances, interceptors), AbortController/race conditions, full CRUD example | ✅ Done |
| `26-redux-toolkit-basics` | Redux Toolkit — slices, store, useSelector/dispatch, multi-slice app | ✅ Done |
| `27-redux-async-thunks` | createAsyncThunk, full CRUD app (Create/Read/Update/Delete + search/filter) | ✅ Done |
| `28-tanstack-query` | TanStack Query — useQuery, useMutation, invalidation, pagination basics | ✅ Done |
| `29-authentication` | JWT auth concept (access/refresh tokens), AuthContext reference code fixed | 🔄 Concept done, practice build pending cleanup session |
| `30-performance` | React.memo, useMemo, useCallback, React DevTools Profiler | ✅ Done |

## Notes
Daily notes are in [`notes/`](./notes), one file per day (`day-01.md`, `day-02.md`, ...).
