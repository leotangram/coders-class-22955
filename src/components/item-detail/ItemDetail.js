import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../item-count/ItemCount";
import Image from "../image/Image";

const ItemDetail = ({
  id,
  image,
  name,
  price,
  quantity,
  setQuantity,
  stock,
}) => {
  const location = useLocation();

  const { addItem } = useContext(CartContext);

  const handleAddItem = () => {
    const item = { id, image, name, price, stock };
    addItem({ item, quantity });
  };

  return (
    <div>
      <h3>ItemDetail</h3>
      <h4>{name}</h4>
      <Image image={image} name={name} />
      {location.pathname === "/cart" ? null : (
        <>
          <ItemCount quantity={quantity} setQuantity={setQuantity} />
          <button onClick={handleAddItem}>Agregar al carrito</button>
        </>
      )}
      {location.pathname === "/cart" && (
        <h3>
          Cantidad agregada de {name}'s: {quantity}
        </h3>
      )}
      {quantity > 0 && <Link to="/cart">Ir al carrito</Link>}
    </div>
  );
};

export default ItemDetail;
