import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../App.css';

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (
    <Card className="product-card h-100 shadow-sm">
      <div className="image-container">
        <Card.Img
          variant="top"
          src={product.images}
          alt={product.title}
          className="product-image"
        />
      </div>

      <Card.Body className="product-body">
        <div className="product-content">
          <Card.Title className="product-title">{product.title}</Card.Title>
          <Card.Text className="product-description">
            {product.description.slice(0, 100)}...
          </Card.Text>
        </div>

        <div className="product-footer">
          <Card.Text className="product-price">
            <strong>${product.price}</strong>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => agregarAlCarrito(product)}
            className="add-to-cart-btn w-100"
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;