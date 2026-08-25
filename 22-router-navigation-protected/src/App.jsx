import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { ProtectedRoute } from './ProtectedRoute';
import { BookDetail } from './pages/BookDetail';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/books/1">Book 1</Link>
      </nav>

      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        Toggle Auth (currently: {isAuthenticated ? "Logged In" : "Logged Out"})
      </button>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;