import React from "react";

function Filters({ filters, onFiltersChange }) {
  const handleChange = (e) => {
    onFiltersChange({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="filters-container">
      <select name="category" value={filters.category} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Starters">Starters</option>
        <option value="MainCourse">MainCourse</option>
        <option value="Dessert">Dessert</option>
      </select>
      <select name="type" value={filters.type} onChange={handleChange}>
        <option value="All">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-veg">Non-veg</option>
      </select>
    </div>
  );
}

export default Filters;
