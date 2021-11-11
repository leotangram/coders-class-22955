import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/item-detail/ItemDetail";
import { getFirestore } from "../../firebase";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("products");
    const currentItem = itemCollection.doc(itemId);

    currentItem
      .get()
      .then((document) => {
        if (!document.exists) {
          console.log("No item");
          return;
        }
        setItem({ id: document.id, ...document.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (!item) {
    return null;
  }

  return (
    <div>
      <h1>ItemDetailContainer</h1>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemDetail
          name={item.name}
          {...item}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
