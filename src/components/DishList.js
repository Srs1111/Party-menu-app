import React from "react";

import DishCard from "./DishCard";

function DishList({
  dishes,
  onAddDish,
  onRemoveDish,
  selectDishes,
  onViewIngredients,
}) {
  if (!dishes || dishes.length === 0) {
    return <p>No dishes available</p>;
  }
  return (
    <div className="dish-list-container">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          onAdd={onAddDish}
          onRemoveDish={onRemoveDish}
          isSelected={selectDishes?.some((d) => d.id === dish.id)}
          onViewIngredients={onViewIngredients}
        />
      ))}
    </div>
  );
}

export default DishList;
