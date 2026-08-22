import { useState, useEffect } from 'react';

function Cart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const sampleProducts = [
    { id: 1, name: "Wireless Mouse", price: 799 },
    { id: 2, name: "Mechanical Keyboard", price: 2499 },
    { id: 3, name: "USB-C Hub", price: 1299 },
  ];

  function addItem(product) {
    setCart([...cart, product]);
  }

  function removeItem(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Available Products</h2>
      {sampleProducts.map(product => (
        <div key={product.id} style={{ marginBottom: '8px' }}>
          {product.name} - ₹{product.price}{' '}
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Your Cart (persists on refresh)</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          {item.name} - ₹{item.price}{' '}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

function App() {
  return <Cart />;
}

export default App;