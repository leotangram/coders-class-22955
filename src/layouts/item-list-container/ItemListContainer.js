import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import Image from "../../components/image/Image";

const ItemListContainer = ({ children }) => {
  const { categoryId } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("products");

    if (!categoryId) {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No items");
            return;
          }
          setProducts(
            querySnapshot.docs.map((document) => ({
              id: document.id,
              ...document.data(),
            }))
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
      return;
    }

    const productsByCategory = itemCollection.where(
      "categoryId",
      "==",
      categoryId
    );

    productsByCategory
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
          return;
        }
        setProducts(
          querySnapshot.docs.map((document) => {
            return {
              id: document.id,
              ...document.data(),
            };
          })
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  const handlePage = () => setCurrentPage(currentPage + 1);

  return (
    <div>
      {children}
      <button onClick={handlePage}>Next</button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {categoryId ? <h2>{categoryId}</h2> : <h2>Todos los items</h2>}
          <ul>
            {products.map(({ id, name, image }) => (
              <li key={id}>
                <h3>{name}</h3>
                <Link to={`item/${id}`}>
                  <Image image={image} name={name} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
