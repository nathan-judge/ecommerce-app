import axios from "axios";
import React from "react";
import ProductListItem from "./ProductListItem";
import "./product-list.scss"



export default function ProductList(props) {
  
  

  return (
    <main>
      <h1>Products</h1>
      <div className="list">
        {props.products.map((product, key) => {
          return (
            <ProductListItem
              key={key}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.thumbnail_photo_url}
              description={product.description}
              category={product.category}
              fetchCart={props.fetchCart}
              cart={props.cart}
              addToCart={props.addToCart}
              added={props.added}
            />
          );
        })}
      </div>
    </main>
  );
}
