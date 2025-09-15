import React from "react";

function DishCard({
  dish,
  onAdd,
  onViewIngredients,
  isSelected,
  onRemoveDish,
}) {
  return (
    <div className="dish-card-container">
      <h1 className="dish-card-heading">{dish.name}</h1>
      <img
        src={dish.image || dish.category.image}
        alt={dish.name}
        onClick={() => onViewIngredients(dish)}
        className="dish-img"
      />

      <p>{dish.price || "No price available"}</p>
      <p className="dish-type">{dish.category.name}</p>
      {isSelected ? (
        <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
          Remove
        </button>
      ) : (
        <button className="dish-card-btn" onClick={() => onAdd(dish)}>
          Add to Party Menu{" "}
        </button>
      )}
      <button
        className="view-details-btn"
        onClick={() => onViewIngredients(dish)}
      >
        View Ingrediant
      </button>
    </div>
  );
}

export default DishCard;
