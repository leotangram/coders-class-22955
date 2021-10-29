import React, { useContext } from "react";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      <h1>Cart Container</h1>
      {items.length > 0 ? (
        <Cart items={items} />
      ) : (
        <h3>No tienes items en tu cart</h3>
      )}
    </div>
  );
};

export default CartContainer;
