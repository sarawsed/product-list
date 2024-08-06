import { useState } from "react";
import "./App.css";
import Products from "./components/product";
import SearchBox from "./components/searchbox";
import Categories from "./components/category";

const App = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <>
      <h1 className="title">Products List</h1>
      <div className="row">
        <div className="row1">
          <button
            className="icon-search"
            onClick={() => setShowSearchBox(!showSearchBox)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          {showSearchBox && <SearchBox onSearch={setSearch} />}
        </div>
        <div className="row2">
          <button className="fav-button" onClick={() => setShowFavorites(!showFavorites)}>
            {showFavorites ? "all products" : "favorites"}
          </button>
        </div>
      </div>
      <Categories
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory} 
      />
      <Products
        search={search}
        selectedCategory={selectedCategory}
        setCategories={setCategories}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        setProducts={setProducts}
        products={products}
        showFavorites={showFavorites}
      />
    </>
  );
};
export default App;
