import React, { useEffect, useState } from 'react'
import './App.css';
import ProductList from './components/ProductList';
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  
useEffect(() => {
  const fetchProducts = async () => {
    try{
      const response = await axios.get('/api/products');
      setProducts(response.data.products);
      console.log('response.data :', response.data);
    } catch (err) {
    }
  }
  fetchProducts();
}, [])

  return (
    <div className="App">
      <h1 style={{ paddingTop: 100 }}>Products</h1>
     <ProductList products={products} />
    </div>
  );
}

export default App;
  