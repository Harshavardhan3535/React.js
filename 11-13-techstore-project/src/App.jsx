import { useEffect, useState, useRef } from "react";
import ProductCard from "./components/ProductCard";
import User from "./components/User";
import products from "./data.js";
import "./App.css";

function App() {
  const topRef = useRef(null);
  const productsRef = useRef(null);

  function scrollToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToProducts() {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const allBrands = ["All", ...new Set(products.map(p => p.brand))];

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("techstore-cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Problem loading cart!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("techstore-wishlist");
    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist);
      } catch (error) {
        console.error("Problem loading wishlist!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  function addToCart(product) {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter(item => item.id !== productId));
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  }

  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="app" ref={topRef}>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon">◆</span>
            TechStore
          </a>
          <ul className="nav-links">
            <li><a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToProducts(); }}>Products</a></li>
            <li><a href="#" className="nav-link">Deals</a></li>
            <li><a href="#" className="nav-link">Support</a></li>
            <li><a href="#" className="nav-link">About</a></li>
          </ul>
          <div className="nav-actions">
            <div className="dropdown-wrapper">
              <button className="nav-btn cart-btn" onClick={() => { setShowCart(!showCart); setShowProfile(false); }}>
                🛒 Cart: {cartCount} (₹{cartTotal.toLocaleString()})
              </button>
              {showCart && (
                <div className="dropdown-panel">
                  {cartItems.length === 0 ? (
                    <p className="dropdown-empty">Your cart is empty</p>
                  ) : (
                    <>
                      {cartItems.map(item => (
                        <div key={item.id} className="cart-dropdown-item">
                          <img src={item.image} alt={item.name} />
                          <div className="cart-dropdown-info">
                            <p>{item.name}</p>
                            <span>Qty: {item.quantity} × ₹{item.price.toLocaleString()}</span>
                          </div>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                        </div>
                      ))}
                      <div className="cart-dropdown-total">Total: ₹{cartTotal.toLocaleString()}</div>
                    </>
                  )}
                </div>
              )}
            </div>

            <button className="nav-btn">Sign In</button>
            <button className="nav-btn primary" onClick={scrollToProducts}>Shop Now</button>

            <div className="dropdown-wrapper">
              <button className="nav-btn user-icon-btn" onClick={() => { setShowProfile(!showProfile); setShowCart(false); }}>
                👤
              </button>
              {showProfile && (
                <div className="dropdown-panel profile-panel">
                  <User userName="John Doe" />
                  <p className="profile-email">john.doe@email.com</p>
                  <button className="nav-btn" style={{ width: "100%", marginTop: "8px" }}>Sign Out</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">New Arrivals 2025</p>
          <h1 className="hero-title">
            The Future of Tech
            <br />
            <span className="hero-highlight">Is Here.</span>
          </h1>
          <p className="hero-description">
            Discover the latest in premium technology.
          </p>
        </div>
      </section>

      <section className="products-section" id="products" ref={productsRef}>
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            {allBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              isBestSeller={product.isBestSeller}
              isWishlisted={wishlist.includes(product.id)}
              onAddToCart={() => addToCart(product)}
              onToggleWishlisted={() => toggleWishlist(product.id)}
            />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 TechStore. All rights reserved.</p>
        <button style={{ position: "fixed", bottom: "30px", right: "30px" }} onClick={scrollToTop}>
          ^
        </button>
      </footer>
    </div>
  );
}

export default App;