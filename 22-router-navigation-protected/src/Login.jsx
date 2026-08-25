import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/dashboard');
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}   