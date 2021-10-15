import React, { useEffect } from "react";

const ItemListContainer = ({ children, greeting, name }) => {
  console.log("Solo log");

  useEffect(() => {
    console.log("Sin dependencias");
  });

  useEffect(() => {
    console.log("Con dependencias vacías");
  }, []);

  useEffect(() => {
    console.log("Con dependencias");
  }, [name]);

  return (
    <div>
      <h3>{greeting}</h3>
      {children}
    </div>
  );
};

export default ItemListContainer;
