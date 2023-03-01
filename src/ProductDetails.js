import React from 'react';
import './ProductDetails.css';

function ProductDetails(props) {
  const { product, onBack } = props;

  return (
    <div className="product-details">
      <button className="back-button" onClick={onBack}>Back to products</button>
      <div className="product-details-content">
        <img className="product-details-image" src={product.image} alt={product.name} />
        <div className="product-details-info">
          <h2 className="product-details-name">{product.name}</h2>
          <p className="product-details-description">{product.description}</p>
          <p className="product-details-price">{product.price}</p>
          <button className="product-details-buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
