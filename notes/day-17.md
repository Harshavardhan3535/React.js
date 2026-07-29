# Day 17 — Making Cart Persistent in TechStore Project

**Video:** REACT 17 [Making Cart Persistent in TechStore Project] — 1h15
**Note:** TechStore project not yet built — watched for the pattern,
practiced cart persistence + localStorage separately; also revisited
Timer.jsx to continue fixing bugs from Day 16.

## What it is
Applying the useEffect + localStorage + JSON.stringify/parse pattern
(from Days 15-16) specifically to an array of objects (a cart), instead
of a single value like a counter.

## Why it exists
Same reason as Day 15/16 — localStorage only stores strings, so arrays
of cart items need JSON.stringify to save and JSON.parse to restore.
Combined with lazy initial state so the cart loads from localStorage on
first render instead of starting empty every time.

## Key syntax/pattern learned
- Cart persistence pattern: lazy `useState` initializer reads + JSON.parses
  from localStorage; a `useEffect` on `[cart]` writes back with JSON.stringify
- Truthy/falsy pattern for "restore if exists, else default":
  `saved ? JSON.parse(saved) : []` (or `Number(saved) : 0` for a plain value)

## What I built in practice
- Continued fixing Timer.jsx from Day 16 — added the missing `timerId`
  assignment and cleanup function (still had one remaining bug: checking
  `if (setisRunning)` instead of `if (running)`, which meant Stop wasn't
  truly stopping the interval)
- Applied useState to TechStore project pieces (project overall still
  not complete)

## Debugging note (real issue I hit)
Timer's Stop button appeared to work but didn't actually stop the interval,
because the effect checked the setter function (`setisRunning`, always
truthy) instead of the state value (`running`). Cleanup was clearing the
old interval correctly, but the same faulty condition immediately started
a new one right after.

## One thing I'd get wrong in an interview
This is the second time hitting the same bug pattern — checking a setter
function instead of its paired state value in a conditional. Worth double
-checking any `if (setSomething)` on sight, since it always evaluates true.