import React from 'react';

function Product(props) {
  const { name, image, price, onBuy } = props;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={onBuy}>Buy</button>
    </div>
  );
}

export default Product;
