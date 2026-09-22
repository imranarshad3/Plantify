import React, { useState } from "react";
import "./ProductFilter.css";

function ProductFilter() {
  const [filters, setFilters] = useState({
    categories: ["Flowering"],
    careLevels: [],
    maxPrice: 150,
    potColor: null,
  });

  const categories = [
    {
      name: "Flowering plants",
      value: "Flowering",
      count: 64,
    },
    {
      name: "Foliage plants",
      value: "Foliage",
      count: 88,
    },
    {
      name: "Succulents & cacti",
      value: "Succulents & Cacti",
      count: 52,
    },
    {
      name: "Hanging plants",
      value: "Hanging Plants",
      count: 36,
    },
  ];

  const careLevels = [
    {
      name: "Easy",
      value: "Easy",
      count: 120,
    },
    {
      name: "Moderate",
      value: "Moderate",
      count: 76,
    },
    {
      name: "Expert",
      value: "Expert",
      count: 44,
    },
  ];

  const potColors = [
    {
      name: "White",
      value: "#eee9dc",
    },
    {
      name: "Terracotta",
      value: "#e1846a",
    },
    {
      name: "Cream",
      value: "#eee9dc",
    },
    {
      name: "Brown",
      value: "#bc6831",
    },
    {
      name: "Green",
      value: "#718268",
    },
  ];

  const handleCategoryChange = (value) => {
    const exists = filters.categories.includes(value);

    const updated = exists
      ? filters.categories.filter((item) => item !== value)
      : [...filters.categories, value];

    setFilters((previous) => ({
      ...previous,
      categories: updated,
    }));
  };

  const handleCareChange = (value) => {
    const exists = filters.careLevels.includes(value);

    const updated = exists
      ? filters.careLevels.filter((item) => item !== value)
      : [...filters.careLevels, value];

    setFilters((previous) => ({
      ...previous,
      careLevels: updated,
    }));
  };

  const handlePotColorChange = (value) => {
    setFilters((previous) => ({
      ...previous,
      potColor: previous.potColor === value ? null : value,
    }));
  };

  const handlePriceChange = (event) => {
    const value = Number(event.target.value);
    setFilters((previous) => ({
      ...previous,
      maxPrice: value,
    }));

    // Dynamically update the CSS track progress variable
    const min = 10;
    const max = 150;
    const progressPercent = ((value - min) / (max - min)) * 100;
    event.target.style.setProperty("--range-progress", `${progressPercent}%`);
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      careLevels: [],
      maxPrice: 150,
      potColor: null,
    });
  };

  return (
    <aside className="product-filters">
      <div className="filter-section">
        <h3>Category</h3>

        <div className="filter-options">
          {categories.map((category) => (
            <label
              className="filter-checkbox"
              key={category.value}
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category.value)}
                onChange={() =>
                  handleCategoryChange(category.value)
                }
              />

              <span>{category.name}</span>

              <small>{category.count}</small>
            </label>
          ))}
        </div>
      </div>


      <div className="filter-section filter-price">
        <h3>Price</h3>

        <div className="price-values">
          <span>$10</span>

          <input
            type="range"
            min="10"
            max="150"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            style={{
              "--range-progress": `${((filters.maxPrice - 10) / (150 - 10)) * 100}%`,
            }}
          />

          <span>${filters.maxPrice}</span>
        </div>
      </div>

      {/* Pot Color */}

      <div className="filter-section filter-pot-color">
        <h3>Pot Color</h3>

        <div className="pot-colors">
          {potColors.map((color) => (
            <button
              type="button"
              key={color.name}
              className={`pot-color ${
                filters.potColor === color.value
                  ? "selected"
                  : ""
              }`}
              style={{
                backgroundColor: color.value,
              }}
              onClick={() =>
                handlePotColorChange(color.value)
              }
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Care Level */}

      <div className="filter-section care-level">
        <h3>Care Level</h3>

        <div className="filter-options">
          {careLevels.map((level) => (
            <label
              className="filter-checkbox"
              key={level.value}
            >
              <input
                type="checkbox"
                checked={filters.careLevels.includes(level.value)}
                onChange={() =>
                  handleCareChange(level.value)
                }
              />

              <span>{level.name}</span>

              <small>{level.count}</small>
            </label>
          ))}
        </div>
      </div>

      <button
        className="clear-filters"
        onClick={clearFilters}
      >
        Clear all filters
      </button>

    </aside>
  );
}

export default ProductFilter;
