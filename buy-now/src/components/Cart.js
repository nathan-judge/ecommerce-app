import ProductInCart from "./ProductInCart";
import "./cart.scss";
import { commerce } from '../commerce';
import { useState, useEffect } from "react";



function Cart() {
  const [cart, setCart] = useState([]);
  const [lineItems, setLineItems] = useState([]);

  const fetchCart = async() => {
    const cart = await commerce.cart.retrieve();
    console.log(cart)
    setLineItems(cart.line_items);
    setCart(cart);
  }
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="cart">
      <h1>My Cart</h1>

      {lineItems.map((product) => {
        return (
          <div>
            <ProductInCart
              key={product.product_id}
              cart_id={cart.id}
              name={product.name}
              product_id={product.product_id}
              image={product.image.url}
              cart_quantity={product.quantity}
              price={product.price.formatted_with_symbol}
            />
          </div>
        );
      })}

      <h3>Subtotal({cart.total_items} items):total {cart.subtotal.formatted_with_symbol}</h3>
    </div>
  );
}

export default Cart;
