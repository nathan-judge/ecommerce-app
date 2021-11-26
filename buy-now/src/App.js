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
import { Widget, addResponseMessage } from "react-chat-widget"
import "react-chat-widget/lib/styles.css";
import {io} from 'socket.io-client'
const socket = io('http://localhost:8000');

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
    addResponseMessage('Welcome to BuyNow! If you have any questions regarding this store, feel free to type it in the chat, we will get back to you shortly!')
    socket.on('receive-message', (message) => {
      console.log("MESSAGE IS: ", message)
      addResponseMessage(message);
    });
  }, []);
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
    //to send message use 'emit' emit will emit messages including themselves (broadcast doesn't include themselves)
    socket.emit('send-message', newMessage);
    //to listen for messages use 'on'

  }

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
      <Widget handleNewUserMessage={handleNewUserMessage}/>
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
