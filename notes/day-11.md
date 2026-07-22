# Day 11 — Controlled Components & TechStore Project (Start)

**Video:** REACT 11 [Controlled Components & TechStore Project] — 1h38
**Project:** TechStore (spans Days 11-13)

## What it is
Started building the TechStore project — applying controlled components,
multiple state variables, event listeners, and array state updates using
the spread operator, all together in one real project.

## Why it exists
This project ties together everything from Days 1-10 into one cohesive
build instead of isolated concept demos — components, props, state,
controlled inputs, all working together.

## Key syntax/pattern learned
- Inline CSS: `style={{ backgroundColor: "yellow" }}` — outer `{}` = JS
  expression, inner `{}` = object literal
- Multiple independent `useState` calls can coexist in one component
- Event listeners: any `on___` prop (onClick, onChange) wires a handler
  function to a DOM event
- Spread operator for state updates: `setCart([...cart, newItem])` —
  creates a NEW array instead of mutating the existing one directly
  (e.g. never `cart.push(item)`)
- This connects back to Day 7's "props are immutable" — state follows
  the same rule: never mutate in place, always create a new copy so
  React can detect the change and re-render

## What I built in practice
- Followed along building the TechStore project structure (in progress,
  continues Day 12)

## One thing I'd get wrong in an interview
Directly mutating array/object state (`cart.push(item)` then calling
`setCart(cart)`) — this often *appears* to work sometimes due to React's
batching quirks, but it's undefined behavior and breaks re-renders in many
cases. The spread operator (or other non-mutating methods) should always
be used to update array/object state.