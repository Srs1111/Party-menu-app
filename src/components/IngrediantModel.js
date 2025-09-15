import React from "react";

function IngrediantModel({ dish, onClose }) {
  return (
    <div className="model">
      <div className="model-content">
        <h1 className="model-dish-heading">{dish.anme}</h1>
        <p className="model-dish-para">Ingrediant</p>
        {dish.ingredients && dish.ingredients.length > 0 ? (
          <ul>
            {dish.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        ) : (
          <button className="model-btn" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}

export default IngrediantModel;
