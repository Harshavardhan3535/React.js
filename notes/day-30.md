# Day 30 — React Performance (React.memo, useMemo, useCallback)

**Source:** Self-directed practice session
**Milestone:** Final day of the 30-day roadmap

## What it is
Performance optimization hooks/APIs that prevent unnecessary re-renders
and re-calculations: React.memo skips a component's re-render if its
props haven't changed; useMemo memoizes an expensive calculated value;
useCallback memoizes a function reference itself.

## Why it exists
When a parent re-renders, all its children re-render by default — even
if a specific child's actual data didn't change. Functions and objects
also get recreated fresh on every render (new reference each time), which
defeats React.memo on a child receiving them as props unless the
reference itself is also stabilized with useMemo/useCallback.

## Key syntax/pattern learned
- `React.memo(Component)` — skips re-render if props are shallow-equal
  to the previous render
- `useMemo(() => expensiveCalculation(), [deps])` — only recalculates
  when a dependency actually changes, otherwise reuses the cached result
- `useCallback(() => {...}, [deps])` — memoizes the function reference
  itself, not just what it returns; necessary when passing a function as
  a prop to a memo-wrapped child
- Root cause performance issue: parent re-render → creates NEW object/
  function references every time → memo'd children still re-render
  because "new reference" looks like "changed" even if the values inside
  are identical
- React DevTools Profiler/Components tabs — installed via Chrome Web
  Store extension, adds React-specific inspection tabs to standard
  browser DevTools (distinct from VS Code's built-in debugger, which is
  a different, non-React-specific tool)

## What I built in practice
- Prime-count calculation wrapped in useMemo (expensive, only
  recalculates when `number` changes, not on every `count` increment)
- useCallback wrapping a click handler
- Two React.memo-wrapped components (Post, Sum) to observe which
  re-render on which state changes, confirmed via console.log inside each

## Debugging notes (real issues hit)
- Repeated the Day 3 lowercase-component bug: `<sum />` instead of `<Sum />`
- Sum.jsx had the same nested-function structural bug seen on Day 24 and
  Day 28 — a function (`sum`) defined inside the component but never
  called or returned, meaning the actual component returned nothing.
  Flattened it into one function body.
- Sum.jsx also hardcoded its loop to 1000 regardless of the `number` prop
  passed in — fixed to actually use the prop, so `<Sum number={1000}/>`
  and any other passed value produce genuinely different results
- Post.jsx used `React.memo` without importing `React` at all

## One thing I'd get wrong in an interview
Assuming React.memo alone is enough to stop a child from re-rendering
when a parent updates — it's not, if the child receives a function or
object as a prop that gets recreated fresh every render. The new
reference makes React.memo's shallow comparison think the prop
"changed," even when its actual contents are identical — useMemo/
useCallback are what stabilize the reference itself.