# Day 7 — Props Continuation & Conditional Rendering

**Video:** REACT 07 [Props Continuation & Conditional Rendering] — 1h19

## What it is
Finished core props concepts (default values, children prop, immutability)
and conditional rendering patterns (ternary, &&). Also covered deployment
basics.

## Why it exists
Default props avoid undefined/broken UI when a prop isn't passed. Children
prop enables generic wrapper components (Card, Modal) that don't need to
know their contents. Conditional rendering lets UI change based on data
without if/else inside JSX (not allowed directly).

## Key syntax/pattern learned
- Default props: `function X({ title, servings = 2 }) {}`
- Children prop: `function Card({ children }) { return <div>{children}</div> }`
  — lets you wrap arbitrary JSX between a component's opening/closing tags
- Ternary for either/or rendering: `{cond ? <A/> : <B/>}`
- `&&` for render-or-nothing: `{cond && <A/>}` — watch out for falsy `0`
  rendering as literal "0" on screen
- Props are **read-only/immutable** — this is the exact line between
  props (fixed, passed in) and state (Day 9, changeable)
- Deployment: `npm run build` → generates optimized `dist/` folder →
  drag-drop to Netlify, or connect repo to Vercel/GitHub for auto-deploy

## What I built in practice
- Assignment: E-commerce product cards, landing page + navigation bar

## One thing I'd get wrong in an interview
Trying to directly mutate a prop inside a component (`props.title = "x"`) —
props are immutable by design; any value that needs to change must live
in state instead, with the update flowing back down through props.