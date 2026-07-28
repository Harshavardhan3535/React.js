# Day 16 — Local Storage & useEffect Cleanup Function

**Video:** REACT 16 [Local Storage & useEffect Cleanup Function] — 1h09

## What it is
A useEffect can return a cleanup function that runs before the component
unmounts, or before the effect runs again on the next dependency change.
Prevents memory leaks from things like intervals, timers, and event listeners.

## Why it exists
Without cleanup, side effects like setInterval keep running even after
they're no longer needed — stacking up duplicate timers/listeners every
time the effect re-runs, causing bugs and memory leaks.

## Key syntax/pattern learned
- Cleanup function: `useEffect(() => { ...; return () => { /* cleanup */ } }, [deps])`
- Cleanup runs BEFORE the effect re-runs (on dependency change) and before unmount
- Lazy initial state: `useState(() => { ... return value })` — function only
  runs once on mount, useful for expensive initial reads (like localStorage)

## What I built in practice
- Persistence Counter: count synced to localStorage using useEffect,
  restored on load using lazy initial state in useState
- Timer: start/stop/reset using setInterval inside useEffect

## Debugging note (real issue I hit)
Timer had two real bugs: (1) checked `if (setisRunning)` instead of
`if (running)` — checking the setter function instead of the state value,
which is always truthy so the condition never actually worked as intended.
(2) No cleanup function, and `timerId` was declared but never assigned —
meant every Start/Stop click created a NEW interval without clearing the
old one, stacking up multiple intervals and making the timer speed up
uncontrollably. Fixed by assigning `timerId = setInterval(...)` and adding
`return () => clearInterval(timerId)`.

## One thing I'd get wrong in an interview
Checking a setter function in a conditional instead of the actual state
value — setter functions are always truthy, so `if (setSomething)` will
never behave as a real condition check.