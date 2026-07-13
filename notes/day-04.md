# Day 4 — Creating Reusable Components

**Video:** REACT 04 [Creating Reusable Components] — 1h00

## What it is
Components can be reused multiple times across an app, nested inside other
components to build a UI tree, and are kept isolated from each other using
JS modules (export/import) instead of sharing global scope.

## Why it exists
Without modules, every variable/function would live in one global namespace —
risking naming collisions as an app grows. Export/import scopes each
component to its own file, same reason Node.js uses require/module.exports.

## Key syntax/pattern learned
- Reusable components: call the same component multiple times (`<RecipeCard />`, `<RecipeCard />`)
- Nested components: components rendering other components inside their JSX
- Custom components vs HTML tags: capital-letter naming is what tells React
  "this is my component," not a built-in element
- `export default` / `import` keeps each component's scope isolated

## What I built in practice
- Reused `RecipeCard` component structure, explored nesting

## One thing I'd get wrong in an interview
Confusing "reusable" with "dynamic" — a component isn't actually reusable
in a meaningful way until it can accept different data per instance, which
is exactly what Props (tomorrow) solves. Today's reuse was still mostly
hardcoded repetition.