import { useEffect, useState, useRef } from "react";
import ProductCard from "./components/ProductCard";
import User from "./components/User";
import products from "./data.js";
import "./App.css";

function App() {
  const topRef = useRef(null);
  function scrollToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
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

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  function toggleWishlist(productId) {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  }

  // Filter: search + brand
  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  // Sort
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
            <li><a href="#" className="nav-link">Products</a></li>
            <li><a href="#" className="nav-link">Deals</a></li>
            <li><a href="#" className="nav-link">Support</a></li>
            <li><a href="#" className="nav-link">About</a></li>
          </ul>
          <div className="nav-actions">
            <span>Cart: {cartCount} (₹{cartTotal})</span>
            <button className="nav-btn">Sign In</button>
            <button className="nav-btn primary">Shop Now</button>
            <User userName="John Doe" />
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

      <section className="products-section" id="products">
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