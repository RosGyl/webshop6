import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Din varukorg</h1>
      {cartItems.length === 0 ? (
        <p>Varukorgen är tom 🛍️</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div>
                <h3>{item.name}</h3>
                <p>Antal: {item.quantity}</p>
                <p>Pris: {item.price * item.quantity} kr</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Ta bort
                </button>
              </div>
            </div>
          ))}
          <h2>Totalt: {total} kr</h2>
          <Link to="/checkout" className="btn btn-success mt-3">
            Gå till kassan
          </Link>
        </>
      )}
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    borderBottom: "1px solid #ccc",
    paddingBottom: "1rem",
  },
  image: {
    width: "100px",
    height: "100px", // Gör höjden lika stor som bredden
    objectFit: "cover", // Bevara proportionerna och fyll utrymmet
    borderRadius: "8px", // Valfritt: Lägg till rundade hörn för bättre design
  },
};

export default CartPage;