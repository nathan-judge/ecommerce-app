import React from "react";
import ProductListItem from "./ProductListItem";
import axios from 'axios'

export default function ProductList (props) {
  

  const listProduct = props.products.map((product) => {
    return (

      <ProductListItem id={product.id} name={product.name} price={product.price}  />
    );
  });
   
  return (
    <main>

      {listProduct}

    </main>
  );
}
  