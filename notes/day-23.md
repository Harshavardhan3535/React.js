# Day 23 — Forms Deep Dive (Multi-Field Validation)

**Source:** Self-taught — controlled component patterns (text, textarea,
select) + multi-field validation built directly

## What it is
Validating several fields on a single form together (name, email,
password, confirmPassword), showing inline error messages per field,
using one state object instead of separate useState per field.

## Why it exists
Separate useState calls per field (Day 10's approach) get unwieldy past
a few fields. A single form-data object + computed property names
(`[name]: value`) scales better, and centralizing validation into one
function keeps error logic organized and testable.

## Key syntax/pattern learned
- Controlled inputs across different element types: `<input>`,
  `<textarea>`, `<select>` — all follow the same value/onChange pattern
- Single state object: `const [formData, setFormData] = useState({...})`
- Computed property update: `setFormData({ ...formData, [name]: value })`
  — one handleChange works for every field via the input's `name` attribute
- Separate `errors` state object, populated by a `validate()` function
  run on submit
- `e.preventDefault()` in the submit handler — without it, form submission
  triggers a real page reload/navigation, wiping React state
- Distinguished multi-field validation (many fields, one form, validated
  together) from multi-step forms (form split across sequential screens/
  steps) — different pattern, not needed for today's scope

## What I built in practice
- SignupForm: name, email, password, confirmPassword with full validation
  (required, email format regex, password length, password match) and
  inline per-field error messages

## Debugging note (real issue I hit)
Had `<form action={}>` with empty curly braces — invalid JSX syntax,
since `{}` requires an actual expression inside. Removed the action/method
attributes in favor of `onSubmit={handleSubmit}` with `e.preventDefault()`.

## One thing I'd get wrong in an interview
Confusing multi-field validation with multi-step forms — they're related
but different: multi-field validation checks several fields on one form
at once; multi-step forms split fields across multiple sequential screens,
usually validating per-step before allowing "Next."