import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Produkten hittades inte 😢</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ maxWidth: "400px" }} />
      <p>{product.description}</p>
      <p><strong>{product.price} kr</strong></p>
      <button onClick={() => addToCart(product)}>Lägg till i varukorgen</button>
    </div>
  );
};

export default ProductPage;
