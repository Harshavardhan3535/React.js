import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { mockLogin } from './mockAuth';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const response = await mockLogin(username, password);
      login(response.token);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <p style={{ fontSize: "0.85rem", color: "gray" }}>Try: test / test123</p>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;