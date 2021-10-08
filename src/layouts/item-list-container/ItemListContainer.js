import React from "react";

const ItemListContainer = ({ children, greeting }) => {
  return (
    <div>
      <h3>{greeting}</h3>
      {children}
    </div>
  );
};

export default ItemListContainer;
