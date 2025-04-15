import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const ProductsPage = () => {
    return (
      <div className="container py-4">
        <h1 className="mb-4">Alla produkter</h1>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem"
  }
};

export default ProductsPage;
