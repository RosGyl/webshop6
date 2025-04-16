
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
        <Link
  to="/"
  className="btn btn-light me-2"
  style={{ border: "1px solid black" }} // Lägg till en svart ram
>
  Hem
</Link>
<Link
  to="/products"
  className="btn btn-light me-2"
  style={{ border: "1px solid black" }} // Lägg till en svart ram
>
  Produkter
</Link>

         
        </div>
        <div>
          <Link
            to="/cart"
            className="btn position-relative"
            style={{
              backgroundColor: totalQuantity > 0 ? "yellow" : "white",
              color: totalQuantity > 0 ? "black" : "black",
              border: "1px solid black",
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
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bakgrund.jpg)`, // Bakgrundsbild
    backgroundSize: "cover", // Gör så att bilden täcker hela headern
    backgroundPosition: "center", // Centrerar bilden
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