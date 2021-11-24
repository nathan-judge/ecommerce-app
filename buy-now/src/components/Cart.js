import ProductInCart from "./ProductInCart";
import "./cart.scss";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Skeleton, Card } from "antd";
import apiHelpers from "../helpers/api-helper";

function Cart() {
  const [cart, setCart] = useState({ subtotal: {} });
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCart = async () => {
    try {
      const cart = await apiHelpers.fetchCart();
      setLineItems(cart.line_items);
      setCart(cart);
      setLoading(false);
    } catch (e) {
      console.log("Error fetching cart", e);
    }
  };
//****** */
  // const fetchCart = async() => {
  //   const cart = await commerce.cart.retrieve();
  //   console.log("cart is: ", cart)
  //   setLineItems(cart.line_items);
  //   setCart(cart);
  // }
  useEffect(() => {
    setLoading(true);
    getCart();
  }, []);

  return (
    <div className="cart">
      <h1>My Cart</h1>

      <h3>Subtotal: {cart.subtotal.formatted_with_symbol} ({cart.total_items} items)</h3>
      {loading ? (
        <div>
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
          <br />
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
          <br />
          <Card>
            <Skeleton avatar paragraph={{ rows: 4 }} active />
          </Card>
        </div>
      ) : (
        <div>
          {lineItems.map((product, key) => {
            return (
              <ProductInCart
                key={key}
                cart_id={cart.id}
                line_item_id={product.id}
                name={product.name}
                product_id={product.product_id}
                image={product.image.url}
                cart_quantity={product.quantity}
                price={product.price.formatted_with_symbol}
                fetchCart={getCart}
              />
            );
          })}
          <h3 style={{ float: "right" }}>
            Subtotal({cart.total_items} items):total{" "}
            {cart.subtotal.formatted_with_symbol}
          </h3>
          <br />
        </div>
      )}
    </div>
  );
}

export default Cart;



      {/* {lineItems.map((product) => {
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
      })} */}