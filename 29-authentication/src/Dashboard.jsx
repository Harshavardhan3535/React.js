import { useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h2>Dashboard (Protected Content)</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;