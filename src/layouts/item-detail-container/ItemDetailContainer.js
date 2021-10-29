import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/item-detail/ItemDetail";
import ResizeComponent from "../../components/ResizeComponent";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);

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
      {/* Consumer */}
      {/* <CartContext.Consumer>
        {(isTrue) => <h1>isTrue: {isTrue}</h1>}
      </CartContext.Consumer> */}
      <h1>ItemDetailContainer</h1>
      <ResizeComponent />
      <ItemDetail
        name={item.name}
        {...item}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
}

export default ItemDetailContainer;
