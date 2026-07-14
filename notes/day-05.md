# Day 5 — Introduction to Props

**Video:** REACT 05 [Introduction to Props] — 1h34

## What it is
Props (short for "properties") let you pass data into a component from
outside, similar to passing arguments into a function. Also covered named
vs default exports/imports in depth.

## Why it exists
Without props, every component would need hardcoded data — making
"reusable" components not actually reusable. Props are what let the same
component render differently based on what's passed in.

## Key syntax/pattern learned
- Passing props: `<RecipeCard title="Masala Chai" servings={2} />`
- Receiving props: `function RecipeCard(props) { return <h2>{props.title}</h2> }`
- Props are **read-only** — a component must never modify its own props
- **Default export**: one per file, import name is flexible
  `export default function X() {}` → `import AnyName from './X'`
- **Named export**: multiple per file, import name must match exactly, uses `{}`
  `export function y() {}` → `import { y } from './file'`

## What I built in practice
- Built a Profile Card assignment applying props
- Practiced both named and default export/import patterns

## One thing I'd get wrong in an interview
Mixing up import syntax between the two — forgetting the curly braces `{}`
for named imports, or trying to rename a named import without using `as`
(`import { y as z } from './file'`), since default imports allow renaming
freely but named imports don't, by convention/requirement.