import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/ItemCount";

const ItemDetail = ({ image, name, quantity, setQuantity }) => {
  return (
    <div>
      <h3>ItemDetail</h3>
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <ItemCount quantity={quantity} setQuantity={setQuantity} />
      {quantity > 0 && (
        <Link to="/cart">
          <button>Agregar al carrito</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
