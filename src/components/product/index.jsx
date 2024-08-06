import { useEffect } from "react";
import "./index.css";

const Products = ({
  search,
  selectedCategory,
  setCategories,
  setProducts,
  products,
  favorites,
  toggleFavorite,
  showFavorites,
}) => {
  useEffect(() => {
    let isMounted = true;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        if (isMounted) {
          setProducts(json);
          const uniqueCategories = [
            ...new Set(json.map((product) => product.category)),
          ];
          setCategories(uniqueCategories);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [setCategories, setProducts]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || product.category === selectedCategory;
    const isFavorite = favorites.includes(product.id);

    return matchesSearch && matchesCategory && (!showFavorites || isFavorite);
  });

  return (
    <div className="box-product">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
            <img className="image-product" src={product.image} alt="" />
            <h2>{product.title}</h2>
            <p>{product.price}$</p>
          <button
            onClick={() => toggleFavorite(product.id)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={favorites.includes(product.id) ? "red" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: "24px", height: "24px" }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
