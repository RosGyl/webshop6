import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product); // Lägg till produkten i varukorgen
  };

  return (
    <div className="card h-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="card-img-top" 
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text font-weight-bold">{product.price} kr</p>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Lägg till i varukorg
        </button>
      </div>
    </div>
  );
};

export default ProductCard;