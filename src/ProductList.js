import React from 'react';
import Product from './Product';

function ProductList(props) {
  const { products, onBuy } = props;

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onBuy={() => onBuy(product)}
        />
      ))}
    </div>
  );
}

export default ProductList;
