import React from "react";
import "./index.css";

const Categories = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="category">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? "active-category" : ""}
        >
          {category}
        </button>
      ))}
      <button
        onClick={() => onSelectCategory("")}
        className={selectedCategory === "" ? "active-category" : ""}
      >
        all produts
      </button>
    </div>
  );
};

export default Categories;
