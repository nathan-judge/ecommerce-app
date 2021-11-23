import "./App.css";
import React, { useState, useEffect } from 'react';
import Products from "./components/Products";
import { commerce } from './commerce';
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart"
import CartProviderState from "./components/CartProviderState";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  console.log('products :', products);
  

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



  return (
    <div className="App">
      {/* <h1 style={{ paddingTop: 100 }}><Products products={products} onAddCart={handleAddToCart}/></h1> */}
      <BrowserRouter>
      <Navbar cart={cart}/>
      <Routes>
      
        <Route path="/" element={<Home products={products} onAddCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<ProductDetails id={products.id} image={products.image} name={products.name} description={products.description}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
