import React, { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Fetch API data on page load
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };
  // Remove item from cart
  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };
  // Filter products by search query
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );
  // Calculate cart total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      {/* Top Navbar */}
      <header className="header">
        <div className="container nav">
          <h1>House Of All</h1>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Product Grid */}
        <div className="grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title.substring(0, 30)}...</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>

      {/* Cart Drawer */}
      <div className={`drawer ${isCartOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            &times;
          </button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <span>{item.title.substring(0, 15)}...</span>
                <b>${item.price}</b>
                <button onClick={() => removeFromCart(index)}>X</button>
              </div>
            ))
          )}
        </div>

        <div className="drawer-footer">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            className="btn-checkout"
            onClick={() => alert("Order Placed!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
