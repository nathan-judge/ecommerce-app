import ProductInCart from "./ProductInCart";
import "./cart.scss";
import { commerce } from "../commerce";
import { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Skeleton, Card } from "antd";
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Cart() {
  const [cart, setCart] = useState({ subtotal: {} });
  const [lineItems, setLineItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    console.log("cart", cart);
    setLineItems(cart.line_items);
    setCart(cart);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchCart();
  }, []);

  return (
    <div className="cart">
      <h1>My Cart</h1>
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
          {lineItems.map((product) => {
            return (
              <ProductInCart
                key={product.product_id}
                cart_id={cart.id}
                line_item_id={product.id}
                name={product.name}
                product_id={product.product_id}
                image={product.image.url}
                cart_quantity={product.quantity}
                price={product.price.formatted_with_symbol}
                fetchCart={fetchCart}
              />
            );
          })}
          <h3 style={{float: "right"}}>
            Subtotal({cart.total_items} items):total{" "}
            {cart.subtotal.formatted_with_symbol}
          </h3>
          <br/>
        </div>
      )}
    </div>
  );
}

export default Cart;
