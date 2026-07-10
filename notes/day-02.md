# Day 2 — JSX & Its Rules

**Video:** REACT 02 [JSX & Its Rules] — 2h00
**Practice:** 30 min

## What it is
JSX lets you write HTML-like syntax inside JavaScript. Under the hood it's
not actually HTML — it compiles down to JS function calls that build the UI.

## Why it exists
Without JSX you'd have to build UI using nested `React.createElement()` calls
manually, which gets unreadable fast. JSX gives you familiar HTML-like markup
while still being pure JavaScript underneath.

## Key syntax/pattern learned
- `{}` inside JSX evaluates any JS expression — but it's an *expression*,
  not a statement, so `if/else` doesn't work inline (ternaries do)
- `className` instead of `class` (since `class` is a reserved JS keyword)
- Every tag must be properly closed, including self-closing tags like `<img />`
- `createRoot(...).render(...)` is how JSX actually gets mounted into the DOM

## What I built in practice
- Rebuilt `main.jsx` from scratch without looking at the tutorial
- Used `{}` to embed a variable and method calls into JSX

## Debugging note (real issue I hit)
Wrote `{name.toUpperCase}` and `{d.getDate}` without the `()` — JSX doesn't
call functions for you automatically. `toUpperCase` and `getDate` are
*methods*, so referencing them without `()` just returns the function
itself, not its result. Had to fix it to `{name.toUpperCase()}` and
`{d.getDate()}` to actually get the uppercase string and the date number.

## One thing I'd get wrong in an interview
Forgetting that `{}` in JSX is plain JavaScript evaluation — not some
special React syntax. If it wouldn't work as a JS expression outside JSX,
it won't work inside `{}` either.