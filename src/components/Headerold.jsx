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
          <Link to="/" style={styles.link}>Hem</Link>
          <Link to="/products" style={styles.link}>Produkter</Link>
        </div>
        <div>
          <Link to="/cart" style={styles.link}>
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
    backgroundColor: "#eee",
    padding: "1rem",
    marginBottom: "2rem"
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#333",
    marginRight: "1rem",
    position: "relative"
  },
  badge: {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "50%",
    position: "absolute",
    top: "-10px",
    right: "-10px",
    fontSize: "0.8rem"
  }
};

export default Header;