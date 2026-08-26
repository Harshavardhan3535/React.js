import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Pages/Home';

function ProductSearch() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        });
        setProducts(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request cancelled', err.message);
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <div>
      <h1>API in React - Race Condition Demo</h1>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      <h2>No. of Products: {products.length}</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProductSearch />
      <hr />
      <Home />
    </div>
  );
}

export default App;