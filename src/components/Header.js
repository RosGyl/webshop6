
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={styles.header}>
      <nav className="container d-flex justify-content-between align-items-center">
        <div>
          <Link to="/" className="btn btn-light me-2">Hem</Link>
          <Link to="/products" className="btn btn-light me-2">Produkter</Link>
        </div>
        <div>
          <Link
            to="/cart"
            className="btn position-relative"
            style={{
              backgroundColor: totalQuantity > 0 ? "yellow" : "white", // Gul om produkter finns, annars vit
              color: totalQuantity > 0 ? "black" : "black", // Svart text i båda fallen
              border: "1px solid black", // Lägg till en kantlinje för bättre synlighet
            }}
          >
            Varukorg 🛒
            {totalQuantity > 0 && (
              <span style={styles.badge}>{totalQuantity}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#008b8b", // Teal färgkod
    padding: "1.5rem", // Ökad padding för större header
    marginBottom: "2rem",
    color: "white", // Vit text
  },
  badge: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "50%",
    position: "absolute",
    top: "-10px",
    right: "-10px",
    fontSize: "0.8rem",
  },
};

export default Header;