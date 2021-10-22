import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/item-detail/ItemDetail";

// const item = {
//   id: "2",
//   name: "Zapatilla",
//   description: "Zapatilla talle 40",
//   stock: 2,
// };

const ItemDetailContainer = () => {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    if (itemId) {
      fetch(`https://rickandmortyapi.com/api/character/${itemId}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setItem(result);
        });
    }
  }, [itemId]);

  if (!item) {
    return null;
  }

  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <ItemDetail name={item.name} {...item} />
    </div>
  );
};

export default ItemDetailContainer;
