import React from "react";

const ProductDescription = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Discount: {item.discount}%</p>
    </div>
  );
};

export default ProductDescription;
