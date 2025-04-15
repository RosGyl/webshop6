import "bootstrap/dist/css/bootstrap.min.css"; // Importera Bootstrap CSS
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

import CheckoutPage from "./pages/CheckoutPage";//importera CheckoutPage
import Header from "./components/Header"; // importera Header
import Footer from "./components/Footer"; // Importera Footer

function App() {
  return (
    <Router>
      <Header /> {/* Lägg till Header här */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer /> {/* Lägg till Footer här */}
    </Router>
  );
}

export default App;



