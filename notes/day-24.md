# Day 24 — React Hook Form

**Source:** "Better Than useState 😳 - Master React Hook Form in 30 Minutes"
(Telugu, JSX) + react-hook-form docs

## What it is
React Hook Form (RHF) is a form library built on uncontrolled inputs
(refs internally, not per-keystroke state), reducing boilerplate for
validation, error handling, and submission compared to hand-rolled
useState forms.

## Why it exists
Less code, better performance (isolates re-renders — typing in one field
doesn't re-render the whole form like controlled useState does), and
built-in validation rules replace manual if/else validate() functions.

## Key syntax/pattern learned
- `const { register, handleSubmit, formState: { errors } } = useForm()`
- `{...register("fieldName", { required, minLength, maxLength, pattern, min, max })}`
  spreads ref/name/onChange/onBlur onto the input automatically
- `onSubmit={handleSubmit(onSubmitFn)}` — handleSubmit wraps your submit
  function, auto-calls preventDefault, only calls your function if
  validation passes
- `errors?.fieldName?.message` — optional chaining since errors only
  exist after validation runs
- Other RHF APIs mentioned: useController, useFormContext, useWatch,
  useFormState — not used today, noted for future reference

## What I built in practice
- NormalForm: hand-built useState form (name, email, password,
  confirmPassword, age, gender, bio) with manual validation — direct
  comparison point against RHF
- ReactHookForm: same fields rebuilt using register() + inline validation
  rules

## Debugging notes (real issues hit)
NormalForm had a serious structural bug — a component function nested
inside another function of the same name, with two `export default`
statements, meaning nothing would even compile. Also found: validate()
called but function defined as `validation` (name mismatch), inverted
logic on age/gender checks (`if (formData.age)` instead of
`if (!formData.age)` — fired errors backwards), a `confirmpassword` vs
`confirmPassword` name/state mismatch breaking that field's updates, and
inputs missing `value=` (not fully controlled despite tracking state).
ReactHookForm had a JS syntax error (`maxLength{` missing a colon),
a missing `onSubmit` on the form tag (register/handleSubmit were
destructured but never wired to the form), and inverted min/max on the
age field.

## One thing I'd get wrong in an interview
Writing `if (formData.age)` when the intent was "if age is EMPTY, show
an error" — this is backwards logic, not a typo-level mistake, and easy
to miss because the code runs without crashing; it just validates the
opposite of what's intended. Always re-read validation conditions as
plain English before trusting them.