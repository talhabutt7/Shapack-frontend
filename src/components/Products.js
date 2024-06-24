// src/components/Products.js
import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Products = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PRODUCTS', payload: data }));
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      {state.products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
