# Day 9 — State Introduction

**Video:** REACT 09 [State Introduction] — 1h40

## What it is
useState is a built-in React hook that lets a component "remember" data
across renders and re-render automatically when that data changes.

## Why it exists
Everything before this (props, JSX, rendering arrays) was static once
rendered. State is what makes a component interactive — data that can
change over time in response to user actions.

## Key syntax/pattern learned
- `const [count, setCount] = useState(0)` — array destructuring (Day 6
  finally clicks fully into place here)
- 3 parts: the useState() function call, the state variable (count), and
  the setter function (setCount) that updates it
- Naming convention: state variable = `something`, setter = `setSomething`
- Never mutate state directly (`count = count + 1` does nothing visible) —
  must always go through the setter function
- Calling the setter doesn't just update a variable, it tells React to
  re-render the component with the new value
- Functional updater form: `setCount(prev => prev + 1)` — safer than
  `setCount(count + 1)` when relying on the latest state value, avoids
  stale closure issues

## What I built in practice
- Built a counter component with increment (and fixed a bug using the
  functional updater form for the setter)

## One thing I'd get wrong in an interview
Assuming `setCount(count + 1)` always uses the freshest value — it
actually uses whatever `count` was during that specific render (a
"snapshot"), which can cause bugs in fast/repeated updates. The
functional form `setCount(prev => prev + 1)` avoids this by always
operating on the latest state.