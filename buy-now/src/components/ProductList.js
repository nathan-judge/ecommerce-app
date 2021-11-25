import React from "react";
import ProductListItem from "./ProductListItem";
import axios from 'axios'
import "./ProductList.scss";

export default function ProductList (props) {


  const listProduct = props.products.map((product) => {
    return (

      <ProductListItem id={product.id}
                       name={product.name} 
                       price={product.price}  
                       quantity={product.quantity}
                       image={product.thumbnail_photo_url}
                       description={product.description}
                       category={product.category} />
    );
  });
   
  return (
    <ul className="ProductsUl">

     
     {listProduct}
    

    </ul>
  );
}

