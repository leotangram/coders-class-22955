import React from "react";
import ItemDetail from "../../components/item-detail/ItemDetail";

const item = {
  id: "2",
  name: "Zapatilla",
  description: "Zapatilla talle 40",
  stock: 2,
};

const ItemDetailContainer = () => {
  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <ItemDetail name={item.name} {...item} />
    </div>
  );
};

export default ItemDetailContainer;
