import React, { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import Cart from "../../components/cart/Cart";
import { CartContext } from "../../context/CartContext";
import { getFirestore } from "../../firebase";

const CartContainer = () => {
  const { items } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);

  useEffect(() => {
    if (items.length > 0) {
      let currentTotal = 0;
      items.forEach(({ item, quantity }) => {
        currentTotal += item.price * quantity;
      });
      setTotal(currentTotal);
    }
  }, [items]);

  const handleFinishPurchase = () => {
    const newItems = items.map(({ item, quantity }) => ({
      item: {
        id: item.id,
        name: item.name,
        price: item.price,
      },
      quantity,
    }));

    const newOrder = {
      buyer: {
        name: "Leo",
        phone: "123456789",
        email: "leo@leo.com",
      },
      items: newItems,
      total,
    };

    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();

    orders
      .add(newOrder)
      .then((response) => {
        items.forEach(({ item, quantity }) => {
          const docRef = db.collection("products").doc(item.id);
          batch.update(docRef, { stock: item.stock - quantity });
        });
        batch.commit();
        setOrderCreatedId(response.id);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Cart Container</h1>
      {items.length > 0 ? (
        <>
          <Cart items={items} />
          <h2>
            Total:{" "}
            <NumberFormat
              displayType="text"
              prefix="$"
              thousandSeparator={true}
              value={total}
            />
          </h2>
          <button onClick={handleFinishPurchase}>Finalizar compra</button>
          {orderCreatedId && (
            <h3>Tu orden con el id: {orderCreatedId} ha sido creado</h3>
          )}
        </>
      ) : (
        <h3>No tienes items en tu cart</h3>
      )}
    </div>
  );
};

export default CartContainer;
