# Day 26 — Redux Toolkit (Store, Slices, Actions)

**Source:** Self-directed session covering Redux fundamentals + Redux Toolkit

## What it is
Redux is a centralized state management library — one "store" holds the
entire app's shared state, and the only way to change it is by dispatching
actions that reducers handle. Redux Toolkit (RTK) is the modern, simplified
way to write Redux, using "slices" to bundle state + reducers together.

## Why it exists
Similar goal to Context API (Day 20) — shared state across components —
but built for larger apps: better performance (components only re-render
for the slice of state they actually use), built-in devtools, and a
predictable, structured update flow.

## Key syntax/pattern learned
- Redux data flow: Component → dispatch(action) → reducer handles it →
  store updates → component re-renders with new state
- `createSlice({ name, initialState, reducers })` — bundles state + the
  functions that update it into one unit
- `configureStore({ reducer: { key: sliceReducer, ... } })` — combines
  multiple slices into one store
- `<Provider store={store}>` wraps the app — same architectural role as
  Context's `<Provider>` from Day 20
- `useSelector(state => state.sliceName.field)` — reads from the store
- `useDispatch()` + `dispatch(actionCreator(payload))` — triggers a state change
- Inside a slice's reducers, `state.value += 1` or `state.array.push(x)`
  LOOKS like direct mutation but is actually safe — RTK uses Immer
  internally to produce a real immutable update. This is a deliberate
  exception specific to RTK slices; the "never mutate directly" rule
  from Day 11 still applies everywhere else (plain React state, props)

## What I built in practice
- Two slices: SocialSlice (books array) and PhysicsSlice (books array +
  enrolledStudentsCount), combined into one store, with add/empty/increment
  actions dispatched from a single component

## Debugging note (real issue I hit)
Imported an action called `emptyBooks` from TWO different slice files in
the same component — the second import silently overwrote the first,
so calling it only affected Physics books, never Social, despite the
name suggesting otherwise. Fixed using import aliasing (`import { emptyBooks
as emptySocialBooks }`), which connects back to Day 5's named-export
aliasing — same syntax, real practical use case this time.

## One thing I'd get wrong in an interview
Assuming `state.value += 1` inside a Redux Toolkit reducer is "breaking
the immutability rule" — it's not, because RTK wraps reducers with Immer,
which translates these "mutations" into proper immutable updates behind
the scenes. This is RTK-specific; doing the equivalent in plain useState
(`someState.value += 1`) would NOT be safe and would not trigger a re-render.