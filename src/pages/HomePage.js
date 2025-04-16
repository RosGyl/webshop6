import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="mb-4">Välkommen till Tomat Paradiset!</h1>
      <img 
        src="/webshop6/images/tomatparadis.jpg" // provar igen
        alt="Tomatparadiset" 
        className="img-fluid mb-4" 
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />

      <p className="lead mb-4">
        Utforska våra fantastiska tomatsorter och hitta något som passar dig.
      </p>
      <Link to="/products" className="btn btn-primary btn-lg">
        Se alla produkter
      </Link>
    </div>
  );
};

export default HomePage;