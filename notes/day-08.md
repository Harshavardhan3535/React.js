# Day 8 — Rendering Arrays in React

**Video:** REACT 08 [Rendering Arrays in React] — 1h18

## What it is
Rendering a list of data by looping over an array and producing one
component per item, instead of hardcoding each one individually in JSX.

## Why it exists
UI is usually driven by dynamic data (recipes, products, users) — hardcoding
each item doesn't scale. Looping over data once and rendering a component
per item does.

## Key syntax/pattern learned
- Compared traditional for loop, forEach, and map for rendering lists
- `.map()` wins for JSX because it **returns a new array**, and JSX can
  render arrays of elements directly as an expression — for/forEach don't
  return anything usable inline
- `key` prop rules: must be unique, must be stable, should come from actual
  data (like an id) — never from array index if the list can reorder/change
- Trainer's assignment: Product Cards (followed along in trainer's cloned repo)
- My own practice: RecipeCard list rendered from a recipes array via `.map()`

## What I built in practice
- Rebuilt RecipeCard as a dynamic list, driven entirely by a `recipes` array
- Applied destructured props (Day 6) + key prop rules together

## One thing I'd get wrong in an interview
Using array index as key on a list that can be reordered or filtered —
works fine for a static list that never changes, but breaks assumptions
once items get added/removed/reordered, since React matches old vs new
elements by key during re-renders.