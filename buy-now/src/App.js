import "./App.css";
import React, { useState, useEffect } from 'react';
import Products from "./components/Products";
import { commerce } from './commerce';
function App() {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async() => {
    const { data } = await commerce.products.list();
  
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <h1 style={{ paddingTop: 100 }}><Products products={products}/></h1>
    </div>
  );
}

export default App;
