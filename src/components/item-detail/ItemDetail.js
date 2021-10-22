import React from "react";

const ItemDetail = ({ image, name }) => {
  return (
    <div>
      <h3>ItemDetail</h3>
      <h4>{name}</h4>
      <img src={image} alt={name} />
    </div>
  );
};

export default ItemDetail;
