import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios from "axios";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AdminDashboard from "./components/admin/AdminDashboard";
import helpers from "./helpers/cartSubtotal"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  
  const fetchCart = async () => {
    try {
      const cartId = localStorage.getItem("cart_id");
      const url = "/api/cart/" + cartId;
      const res = await axios.get(url);
            
      console.log("pppp", res.data);
      let newCart = res.data.cart;
      setCart(newCart);
      const cartCountAndTotal = helpers.cartSubtotal(newCart);
      setItemsCount(cartCountAndTotal.count);
      setSubtotal(cartCountAndTotal.amount);
    } catch (e) {
      console.log("Error fetching new cart", e);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
        console.log("response.data :", response.data);
      } catch (err) {}
    };
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <BrowserRouter>
      <Navbar cartTotal={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList products={products} fetchCart={fetchCart} />} />
        <Route path="/cart" element={<Cart cart={cart} itemsCount={itemsCount} subtotal={subtotal} fetchCart={fetchCart} setCart={setCart} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect, useState } from 'react'
// import './App.css';
// import ProductList from './components/ProductList';
// import axios from 'axios'
// import ReactDOM from "react-dom";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./components/Cart";
// import Navbar from "./components/Navbar";

// const App = () => {
//   const [products, setProducts] = useState([]);
//   // const [cart, setCart] = useState([]);

// useEffect(() => {
//   const fetchProducts = async () => {
//     try{
//       const response = await axios.get('/api/products');
//       setProducts(response.data.products);
//       console.log('response.data :', response.data);
//     } catch (err) {
//     }
//   }
//   fetchProducts();
// }, [])

//   return (
//   <BrowserRouter>
//     <Navbar cart={cart} />
//     <Routes>
//       <Route path="/" element={<ProductList setCart={setCart} products={products}/>} />
//       <Route path="/cart" element={<Cart />} />
//     </Routes>
//   </BrowserRouter>

//   );
// }

// export default App;
