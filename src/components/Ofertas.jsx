import React from 'react';
import ProductList from './ProductList';
import '../App.css'

const Ofertas = () => {
  return (
   <div className="home-container py-5">
      <div className="container">
        <h1 className="home-title text-center mb-5">
          Ofertas
        </h1>

        <div className="home-content p-4 rounded-4 shadow-sm">
          <ProductList category="groceries" />
        </div>
      </div>
    </div>
  );
};

export default Ofertas;


 
