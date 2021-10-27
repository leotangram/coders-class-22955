import React from "react";
import "./ItemCount.css";

const ItemCount = ({ quantity, setQuantity }) => {
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleRest = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="counter-container">
      <button onClick={handleRest}>-</button>
      <h4>Cantidad seleccionada: {quantity}</h4>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default ItemCount;
