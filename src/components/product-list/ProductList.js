import { useEffect, useState } from "react";
import { promises } from "../../helpers/promises";
import Product from "../product/Product";
import "./ProductList.css";

const Promises = ({ products }) => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    if (products) {
      promises(
        products,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setCurrentProducts
      );
    }
  }, [products]);

  /**
   * REFERENCE TO THEN & CATCH
   */
  // task
  //   .then(
  //     (result) => {
  //       console.log(`Result is correct ${result}`);
  //       setMessage(`Result is correct ${result}`);
  //       setIsSuccess(true);
  //     }
  //     // (error) => {
  //     //   console.log(`Error: ${error}`);
  //     //   setMessage(`Error: ${error}`);
  //     //   setIsSuccess(false);
  //     // }
  //   )
  //   .catch((error) => {
  //     console.log(`Error in progress ${error}`);
  //   })
  //   .finally(() => {
  //     setIsFinished(true);
  //     setIsLoading(false);
  //   });

  return (
    <div>
      <h1>Promises</h1>
      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && <h3>Loading...</h3>}
      {isFinished && <h2>Se ha finalizado la respuesta</h2>}
      {currentProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Promises;
