import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import App from "../App";
import { Route, Routes } from "react-router-dom";

export default function CartProviderState() {
  const [cart, setCart] = useState({});
  return (
    <>
      <Navbar cart={cart}/>
        <Routes>
        <Route path="/" element={<App cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}


