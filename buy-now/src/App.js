import React, { useEffect, useState } from 'react'
import './App.css';
import ProductList from './components/ProductList';
import axios from 'axios'
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  
  
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
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductList products={products}/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>

  );
}

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

