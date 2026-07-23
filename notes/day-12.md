# Day 12 — Adding Functionalities to TechStore Project

**Video:** REACT 12 [Adding Functionalities to TechStore Project] — 1h35
**Status:** In progress — session runs longer than 1 lesson, continues next sitting

## What it is
Continuing the TechStore project from Day 11, adding real interactive
functionality on top of the component/state structure already built.

## Why it exists
Moves the project from static/skeleton components to an actually working
store — cart behavior, dynamic updates, likely search/filtering.

## Key syntax/pattern learned
(fill in once session is finished — likely includes some of:)
- Add to cart using spread operator: `setCart([...cart, product])`
- Remove from cart using `.filter()`: `setCart(cart.filter(item => item.id !== id))`
- Quantity update using `.map()`: updating one matching item without
  touching the rest of the array
- Controlled search/filter input (Day 10 pattern applied to product list)
- Possibly `.reduce()` for cart total price calculation

## What I built in practice
- TechStore functionality — in progress, continues next session

## One thing I'd get wrong in an interview
(fill in once concepts are confirmed — likely something about avoiding
direct array mutation when removing/updating cart items, same principle
as Day 11's spread operator note)