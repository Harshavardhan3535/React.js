# Day 14 — useEffect Introduction & Local Storage

**Video:** REACT 14 [useEffect Introduction & Local Storage] — 1h27

## What it is
useEffect is a hook that lets a component run "side effects" — code that
happens outside the normal render-return flow of JSX (fetching data,
timers, localStorage, subscriptions).

## Why it exists
JSX rendering is meant to be "pure" — it should just describe UI based on
current state/props. Side effects (things with external consequences, like
saving to localStorage) don't belong directly in the render logic, so
useEffect gives them a proper place to run, tied to the component's
lifecycle.

## Key syntax/pattern learned
- `useEffect(() => { ... }, [dependencies])` — callback function + dependency array
- No dependency array → runs after every render
- Empty array `[]` → runs once, on mount only
- Array with values `[count]` → runs on mount, then again whenever that value changes
- "Mounting" = component inserted into the DOM for the first time
- localStorage: `localStorage.setItem(key, value)` / `localStorage.getItem(key)`
- Common pairing: one useEffect with `[]` to read from localStorage on
  mount, another useEffect with `[value]` to write to localStorage
  whenever that value changes

## What I built in practice
- Saved a value to localStorage on state change, confirmed it persists
  across a page refresh

## One thing I'd get wrong in an interview
Forgetting that an empty dependency array `[]` doesn't mean "never runs" —
it means "runs exactly once, after the first render." A common confusion
is expecting it to behave like "no effect at all."