import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Navbar from "./Navbar";
import Products from "./Products";


function Home(props) {
  console.log("home on add cart is: ", props.handleAddToCart)
 
   return (
    <div>
       <h1 style={{ paddingTop: 100 }}><Products products={props.products} onAddCart={props.onAddCart}/></h1>
    
    </div>
  );
}


export default Home;