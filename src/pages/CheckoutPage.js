import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order skickad:", formData, cartItems);
    alert("Tack för ditt köp!");
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-5">
      <h1 className="mb-4">Kassa</h1>
      <div className="row">
        {/* Varukorgssammanfattning */}
        <div className="col-md-6">
          <h4>Din varukorg</h4>
          {cartItems.length === 0 ? (
            <p>Din varukorg är tom.</p>
          ) : (
            <ul className="list-group mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} (x{item.quantity})
                  <span>{item.price * item.quantity} kr</span>
                </li>
              ))}
            </ul>
          )}
          <h5>Total: {totalPrice} kr</h5>
        </div>

        {/* Formulär för kunduppgifter */}
        <div className="col-md-6">
          <h4>Fyll i dina uppgifter</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Namn</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-post</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Adress</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Slutför köp</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;