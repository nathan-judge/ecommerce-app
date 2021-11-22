import "./App.css";
import React, { useState, useEffect } from 'react';
import Products from "./components/Products";
import { commerce } from './commerce';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async() => {
    const { data } = await commerce.products.list();
  
    setProducts(data);
  }

  const fetchCart = async() => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  const handleAddToCart = async (productId, quantity) =>  {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

 
  console.log("cart total item is: ", cart.total_items)

  return (
    <div className="App">
      <h1 style={{ paddingTop: 100 }}><Products products={products} onAddCart={handleAddToCart}/></h1>
    </div>
  );
}

export default App;
