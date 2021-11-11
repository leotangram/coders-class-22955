import React from "react";
import "./Image.css";

const Image = ({ image, name }) => {
  return <img className="image-product" src={image} alt={name} />;
};

export default Image;
