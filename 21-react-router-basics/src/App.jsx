import { Route, Routes, useLocation, Link, NavLink } from 'react-router-dom';
import { Home } from './Home';
import { BookList } from './Booklist';
import { NewBook } from './pages/Newbook';
import { BookLayout } from './BookLayout';
import { Book } from './pages/Book';
import { NotFound } from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li>
            <NavLink style={({ isActive }) => (isActive ? { backgroundColor: "lightgray" } : {})} to="/">
              {({ isActive }) => (isActive ? "Active Home" : "Home")}
            </NavLink>
          </li>
        </ul>
      </nav>

      {location.state && <p>{location.state}</p>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;