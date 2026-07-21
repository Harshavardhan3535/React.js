# Day 10 — Rules of useState & Controlled Components

**Video:** REACT 10 [Rules of useState & Controlled Components] — 1h17

## What it is
Covered the Rules of Hooks (how/where useState can be called) and controlled
components — form inputs whose value is driven entirely by React state.

## Why it exists
Rules of Hooks exist because React tracks hooks by call order across renders;
breaking that order (e.g. calling a hook inside a condition) causes React to
lose track of which state belongs to which hook. Controlled components make
React state the single source of truth for form data, instead of the DOM
tracking input values independently.

## Key syntax/pattern learned
- React Arrow Function Component (RAFC) syntax: `const ComponentName = () => { ... }`
- Controlled input pattern: `value={state}` + `onChange={(e) => setState(e.target.value)}`
- Checkbox inputs use `checked`, not `value`
- Input values from `e.target.value` are always strings — needed
  `Number(e.target.value)` to store age as an actual number, not a string
- Component names must start with a capital letter — a lowercase component
  name gets treated as an HTML tag, not rendered as intended

## What I built in practice
- Trainer's UserForm assignment (name field started in session, finished independently)
- Fixed: component naming (lowercase → capitalized), fully wired up
  email/age/subscribe fields to their own state + live preview section
  (previously only name was connected)
- Styled the form with a card layout, focus states, and a separated
  live-preview section

## Debugging note (real issue I hit)
Hit a Node version mismatch error while scaffolding — `create-vite` crashed
because the terminal was running Node 18 instead of Node 24 (multiple Node
versions installed via nvm-windows). Fixed with `nvm use 24.13.1`. Since
nvm-windows has no persistent default-version command, this needs to be
re-run once per new terminal session going forward.

## One thing I'd get wrong in an interview
Forgetting that checkbox/radio inputs use `checked` instead of `value` in a
controlled component — an easy slip since every other input type uses `value`.