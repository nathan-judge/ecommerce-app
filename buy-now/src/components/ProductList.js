import React from "react";
import ProductListItem from "./ProductListItem";
import { Widget } from "react-chat-widget"
import "react-chat-widget/lib/styles.css";

export default function ProductList(props) {
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
  }
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
      <Widget handleNewUserMessage={handleNewUserMessage}/>
    </main>
  );
}
