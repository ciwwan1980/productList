import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function CardContainer(props) {
  const { products } = props;
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleBuy(product) {
    setSelectedProduct(product);
  }

  function handleBack() {
    setSelectedProduct(null);
  }

  return (
    <div className="card-container">
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBack={handleBack} />
      ) : (
        <ProductList products={products} onBuy={handleBuy} />
      )}
    </div>
  );
}

export default CardContainer;
