import { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function validate(data) {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Email is invalid";
    if (data.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (data.confirmPassword !== data.password) newErrors.confirmPassword = "Passwords don't match";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid, submitting:", formData);
      alert("Signup successful! Check the console for the submitted data.");
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={{ width: "100%", padding: "8px" }} />
          {errors.name && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{ width: "100%", padding: "8px" }} />
          {errors.email && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" style={{ width: "100%", padding: "8px" }} />
          {errors.password && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.password}</p>}
        </div>

        <div style={{ marginBottom: "12px" }}>
          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" style={{ width: "100%", padding: "8px" }} />
          {errors.confirmPassword && <p style={{ color: "red", fontSize: "0.85rem" }}>{errors.confirmPassword}</p>}
        </div>

        <button type="submit" style={{ width: "100%", padding: "10px" }}>Sign Up</button>
      </form>
    </div>
  );
}

function App() {
  return <SignupForm />;
}

export default App;