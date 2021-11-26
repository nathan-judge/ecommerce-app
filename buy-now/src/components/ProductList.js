import React from "react";
import ProductListItem from "./ProductListItem";


export default function ProductList(props) {
  
  const listProduct = props.products.map((product, key) => {
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
      />
    );
  });

  return (
    <main>
      <h1>Products</h1>
      {listProduct}
     
    </main>
  );
}
