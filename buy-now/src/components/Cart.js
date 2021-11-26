import ProductInCart from "./ProductInCart";
import helpers from "../helpers/cartSubtotal";
import "./cart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import EmptyCart from "./EmptyCart";

// const carts = [
//   {
//     product_id: 1,
//     name: "Shoes",
//     description: "Red shoes for hiking",
//     image: "https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg",
//     product_quantity: 50,
//     number_of_items: 12,
//     price: 120
//   },
//   {
//     product_id: 2,
//     name: "Jacket",
//     description: "Blue jacket for winter",
//     image: "https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg",
//     product_quantity: 25,
//     number_of_items: 1,
//     price: 1220
//   },
//   {
//     product_id: 3,
//     name: "Hats",
//     description: "Cool hat for summer",
//     image: "https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg",
//     product_quantity: 150,
//     number_of_items: 3,
//     price: 20
//   }
// ];

function Cart(props) {

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success!",
      description:
        "Payment successful. You will receive an email with the order confirmation!"
    });
  };

  const handleToken = async (token, address) => {
    console.log("==================");
    console.log(token, address);
    try {
      await axios.post("/api/checkout", { token, cart: props.cart, subtotal: props.subtotal });
      openNotificationWithIcon("success");
      localStorage.removeItem("cart_id");
      props.setCart([]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      {props.cart.length <= 0 && <EmptyCart />}
      {props.cart.length > 0 && (
        <div>
          {props.cart.map((product, key) => {
            return (
              <ProductInCart
                key={key}
                name={product.name}
                product_id={product.product_id}
                image={product.thumbnail_photo_url}
                description={product.description}
                cart_quantity={product.number_of_items}
                product_quantity={product.product_quantity}
                price={product.price}
                fetchCart={props.fetchCart}
              />
            );
          })}

          <div className="cart-total">
            <h3>
              Subtotal({props.itemsCount} items):${props.subtotal}
            </h3>
            <br />
              <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                token={handleToken}
                shippingAddress
                billingAddress
                amount={props.subtotal * 100}
              />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
