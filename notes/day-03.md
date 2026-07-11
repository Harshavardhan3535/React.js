# Day 3 — Components: The Building Blocks of React

**Video:** REACT 03 [Components – The Building Blocks of React] — 1h30
**Practice:** Assignment given by trainer (to complete separately)

## What it is
A component is a self-contained, reusable piece of UI written as a JavaScript
function that returns JSX. React apps are built by composing many small
components together instead of writing one giant page.

## Why it exists
Breaking UI into components keeps code organized, reusable, and easier to
reason about — each component handles one piece of the interface instead of
one massive file trying to manage everything.

## Key syntax/pattern learned
- Components are written as functions that return JSX
- Component names must start with a **capital letter** — lowercase names
  get treated as regular HTML tags, not custom components
- A component must return a **single parent element** (or a fragment
  `<>...</>`) — can't return multiple sibling elements unwrapped
- Components get imported and rendered inside other components (e.g. inside `App.jsx`)
- Typically one `export default` per component file

## What I built in practice
- Trainer gave a small assignment applying function components — building
  it independently to reinforce the pattern (in progress)

## One thing I'd get wrong in an interview
Forgetting that a component returning two sibling elements without a
wrapping tag/fragment throws an error — every component needs exactly
one root element being returned.