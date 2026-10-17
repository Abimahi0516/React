import { useState } from "react";

function Product() {
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 50000,
    quantity: 2
  });

  function changeProduct() {
    setProduct({
      name: "Mobile",
      price: 20000,
      quantity: 5
    });
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <p>Quantity: {product.quantity}</p>

      <button onClick={changeProduct}>
        Change Product
      </button>
    </div>
  );
}

export default Product;
