import React from "react";
import ProductListItem from "./ProductListItem";
import { Widget, addResponseMessage } from "react-chat-widget"
import "react-chat-widget/lib/styles.css";
import {useEffect} from "react";
import {io} from 'socket.io-client'
const socket = io('http://localhost:8000');

export default function ProductList(props) {
  useEffect(() => {
    addResponseMessage('Welcome to BuyNow! If you have any questions regarding this store, feel free to type it in the chat, we will get back to you shortly!')
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`)
    //to send message use 'emit' emit will emit messages including themselves (broadcast doesn't include themselves)
    socket.emit('send-message', newMessage);
    //to listen for messages use 'on'
    socket.on('receive-message', (message) => {
      addResponseMessage(message);
    })
   
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
