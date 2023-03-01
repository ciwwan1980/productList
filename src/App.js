import React from 'react';
import CardContainer from './CardContainer';

const products = [
  {
    id: 1,
    name: 'iPhone 12',
    image: 'https://via.placeholder.com/300x300',
    price: '$799',
    description: 'The latest iPhone model',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    image: 'https://via.placeholder.com/300x300',
    price: '$699',
    description: 'The latest Samsung flagship phone',
  },
  {
    id: 3,
    name: 'Google Pixel 5',
    image: 'https://via.placeholder.com/300x300',
    price: '$699',
    description: 'The latest Google Pixel phone',
  },
];

function App() {
  return (
    <div>
      <CardContainer products={products} />
    </div>
  );
}

export default App;
