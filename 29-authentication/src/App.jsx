import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;