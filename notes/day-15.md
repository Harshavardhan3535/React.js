# Day 15 — Local Storage in Node.js

**Video:** REACT 15 [Local Storage in Node.js] — 1h06

## What it is
Used the `node-localstorage` npm package to simulate browser localStorage
in a plain Node.js script (not inside React/browser), as a way to learn
the concept before applying it inside a real React app (TechStore, Day 16).

## Why it exists
localStorage can only store strings — it cannot hold objects/arrays
directly. JSON.stringify/JSON.parse bridge that gap, exactly like how API
responses get JSON-encoded to travel over HTTP and parsed back into
objects on arrival.

## Key syntax/pattern learned
- `localStorage.setItem(key, value)` / `localStorage.getItem(key)`
- Everything read back from localStorage is a **string**, even if you
  stored a number — `typeof` on a retrieved value confirms this
- `JSON.stringify(obj)` — converts an object/array into a string, so it
  can be stored
- `JSON.parse(str)` — converts a stored string back into a real
  object/array to use in code
- The real React app will use the browser's native `localStorage`
  (no npm package needed) — `node-localstorage` was just for practicing
  the concept in a plain Node script

## What I built in practice
- Stored simple key/value pairs (age, city, favTech) in localStorage via
  Node script
- Stored an array of cart item objects using JSON.stringify, retrieved
  and parsed it back with JSON.parse to confirm round-trip works

## One thing I'd get wrong in an interview
Assuming localStorage can store objects/arrays directly — it can't,
everything must be stringified first and parsed back out, since
localStorage is a string-only key-value store.