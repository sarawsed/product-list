import React from "react";
import "./index.css";

const SearchBox = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return <input className="search" type="text" placeholder="Search..." onChange={handleChange} />;
};

export default SearchBox;
