import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ id, name, description, stock }) => {
  const handleShowProductClick = () => {
    console.log(`Product ${id} clicked`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>
          <strong>ID</strong> {id}
        </Card.Text>
        <Card.Text>
          <strong>Name</strong> {name}
        </Card.Text>
        <Card.Text>
          <strong>Description</strong> {description}
        </Card.Text>
        <Card.Text>
          <strong>Stock</strong> {stock}
        </Card.Text>
        <button onClick={handleShowProductClick}>
          Ver detalle del producto
        </button>
      </Card.Body>
    </Card>
  );
};

export default Product;
