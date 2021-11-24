import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const Index = () => {
  setToLS('all-themes', themes.default);
  return(
   
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
  )
}
ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar />
  <Index/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
