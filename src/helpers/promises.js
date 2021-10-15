export const promises = (
  products,
  setMessage,
  setIsSuccess,
  setIsLoading,
  setIsFinished,
  setCurrentProducts
) => {
  const productsResponse = new Promise((resolve, reject) => {
    // Synchronous code
    setTimeout(() => {
      resolve(products);
    }, 3000);
    // reject("This petition is rejected");
  });

  productsResponse
    .then((result) => {
      setMessage(`Result is correct ${JSON.stringify(result)}`);
      setIsSuccess(true);
      setCurrentProducts(result);
    })
    .catch((error) => {
      console.log(`Error in progress ${error}`);
      setMessage(`Error: ${error}`);
      setIsSuccess(false);
    })
    .finally(() => {
      setIsFinished(true);
      setIsLoading(false);
    });
};
