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

function Cart() {
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const fetchCart = async () => {
    try {
      const cartId = localStorage.getItem("cart_id");
      const url = "/api/cart/" + cartId;
      const res = await axios.get(url);
            
      console.log("pppp", res.data);
      let newCart = res.data.cart;
      setCart(newCart);
      const cartCountAndTotal = helpers.cartSubtotal(newCart);
      setItemsCount(cartCountAndTotal.count);
      setSubtotal(cartCountAndTotal.amount);
    } catch (e) {
      console.log("Error fetching new cart", e);
    }
  };

  useEffect(() => {
    console.log("SDF")
    fetchCart();
  }, []);

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
      await axios.post("/api/checkout", { token, cart, subtotal });
      openNotificationWithIcon("success");
      localStorage.removeItem("cart_id");
      setCart([]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="cart">
      <h1>My Cart</h1>
      {cart.length <= 0 && <EmptyCart />}
      {cart.length > 0 && (
        <div>
          {cart.map((product, key) => {
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
                fetchCart={fetchCart}
              />
            );
          })}

          <div className="cart-total">
            <h3>
              Subtotal({itemsCount} items):${subtotal}
            </h3>
            <br />
            {cart.length > 0 && (
              <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                token={handleToken}
                shippingAddress
                billingAddress
                amount={subtotal * 100}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
