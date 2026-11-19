import React, { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  function handleAddToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === category);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <div>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <Cart cart={cart} />
    </div>
  );
}

export default App;