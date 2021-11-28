import axios from "axios";
import React from "react";
import adminProductListItem from "./adminProductListItem";
// import ProductListItem from "./ProductListItem";



export default function adminProductList(props) {
  

  return (
    <main>

      <div className="list">
        {props.products.map((product, key) => {
          return (
      <adminProductListItem
      key={key}
      id={product.id}
      name={product.name}
      price={product.price}
      quantity={product.quantity}
      image={product.thumbnail_photo_url}
      description={product.description}
      category={product.category}
      />
          );
        })}
      </div>
    </main>
  );
}