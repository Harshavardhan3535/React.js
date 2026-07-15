# Day 6 — Props Destructuring

**Video:** REACT 06 [Props Destructuring] — 1h27

## What it is
Destructuring extracts values out of arrays or objects into individual
variables directly, instead of accessing them one by one (props.title,
props.servings, etc.)

## Why it exists
Cleaner, more readable code — especially once a component takes several
props. Also central to hooks later (useState returns an array meant to
be destructured).

## Key syntax/pattern learned
- Array destructuring: `const [a, b] = arr` — position-based
- Skipping values: `const [, second] = arr`
- Swapping values: `[a, b] = [b, a]` — no temp variable needed
- Object destructuring: `const { title } = obj` — key-based, order doesn't matter
- Aliasing: `const { title: recipeTitle } = obj` — rename while extracting
- Nested destructuring: pulling values out of objects inside objects
- Function parameter destructuring: `function X({ title, servings }) {}` —
  destructure directly in the parameter list, exactly how props are used

## What I built in practice
- Refactored RecipeCard/Profile Card to use destructured props instead
  of `props.whatever`

## One thing I'd get wrong in an interview
Mixing up array vs object destructuring rules — arrays are strictly
positional (skipping/order matters), objects are strictly by key name
(order doesn't matter, but names must match exactly unless aliased).
This distinction is exactly why useState works as `const [x, setX]`
(array, order-dependent) rather than an object.
