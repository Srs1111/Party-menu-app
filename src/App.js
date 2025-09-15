import { useState } from "react";

import mockDishes from "./data/mockDishes";

import DishList from "./components/DishList";

import Filters from "./components/Filters";

import IngrediantModel from "./components/IngrediantModel";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  const [dishes] = useState(mockDishes);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [filters, setFilters] = useState({ category: "All", type: "All" });
  const [modelDish, setModelDish] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddDish = (dish) => {
    if (!selectedDishes.find((d) => d.id === dish.id)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredDishesh = dishes.filter((dish) => {
    const matchCategory =
      filters.category === "All" || dish.category === filters.category;
    const matchSearch =
      searchQuery.trim() === "" ||
      dish.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
  console.log("All dishesh", mockDishes);
  console.log("Selcetd Disheds", selectedDishes);

  return (
    <div className="App-container">
      <h1 className="app-heading">Party Menu Selection App</h1>
      <Filters filters={filters} onFiltersChange={handleFilterChange} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <DishList
        dishes={filteredDishesh}
        onAddDish={handleAddDish}
        onViewIngredients={setModelDish}
        onRemoveDish={(id) =>
          setSelectedDishes(selectedDishes.filter((d) => d.id !== id))
        }
      />
      {modelDish && (
        <IngrediantModel dish={modelDish} onClose={() => setModelDish(null)} />
      )}
      <h1 className="selected-dish-heading">Selected Dish</h1>
      <ul>
        {selectedDishes.map((dish) => (
          <li key={dish.id}>
            {dish.name} - {dish.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
