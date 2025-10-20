import React from 'react';
import ProductList from './ProductList';

const Destacados = () => {
  return (
       <div className="home-container py-5">
      <div className="container">
        <h1 className="home-title text-center mb-5">
          Destacados
        </h1>

        <div className="home-content p-4 rounded-4 shadow-sm">
          <ProductList category="jewelery" />
        </div>
      </div>
    </div>
  );
};

export default Destacados;


