# Day 20 — Prop Drilling & Context API

**Video:** REACT 21 [Prop Drilling & Context API] — 1h12
**Note:** Final lesson of TAP Academy's React syllabus (Module 8 complete)

## What it is
Prop drilling: passing data through multiple layers of components (parent
→ child → grandchild) purely so a deeply nested component can use it, even
though the components in between don't need the data themselves. Context
API solves this by creating shared state any component can access directly.

## Why it exists
As component trees get deeper, prop drilling becomes messy — every
intermediate component has to know about and pass along data it never
actually uses. Context API removes that middleman requirement entirely.

## Key syntax/pattern learned
- Two hooks: `createContext()` — creates the context object;
  `useContext()` — consumes it in any descendant component
- 4 implementation steps:
  1. Create context: `const MyContext = createContext()`
  2. Provide context: wrap components in `<MyContext.Provider value={...}>`
  3. Consume context: any nested component can access it, regardless of depth
  4. `const value = useContext(MyContext)` — pulls the data directly
- Middle/intermediate components in the tree never touch the context data
  at all — they just render their children normally

## What I built in practice
- Built a 3-level nested component structure (parent → middle → deep child)
  first using prop drilling, then refactored to Context API — confirmed
  the middle component needed zero changes after the refactor

## One thing I'd get wrong in an interview
Assuming Context API replaces useState/props entirely — it doesn't. It's
specifically for data that many components across different depths need
(theme, auth user, language) — for straightforward parent-to-direct-child
data, regular props are still simpler and more appropriate.