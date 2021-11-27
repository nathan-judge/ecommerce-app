//import 'antd/dist/antd.css';
import { Card, Button } from "antd";
import axios from "axios";
import { useState } from "react";

function ProductInCart(props) {
  const [cartQuantity, setCartQuantity] = useState(props.cart_quantity);
  const [productQuantity] = useState(props.product_quantity);

  const changeQuantity = async (newQuantity) => {
    try {
      const cartId = localStorage.getItem("cart_id");
      await axios.post("/api/cart/" + cartId, {
        cart_id: cartId,
        product_id: props.product_id,
        number_of_items: newQuantity
      });
      setCartQuantity(newQuantity);
      props.fetchCart();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Card className="cart-card" style={{ width: "100%" }}>
        <div className="cart-item">
          <img height="100px" src={props.image} alt={props.name}></img>
          <span className="cart-product-detail">
            <h3 className="product-cart-name"> {props.name}</h3>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <p>{productQuantity < 1 ? "Out of Stock" : "In Stock"}</p>
            <span className="cart-edit">
              <div>
                <Button onClick={() => changeQuantity(cartQuantity - 1)}>
                  -
                </Button>
                &nbsp;
                <div>{props.cart_quantity}</div>
                &nbsp;
                <Button onClick={() => changeQuantity(cartQuantity + 1)}>
                  +
                </Button>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" danger onClick={() => changeQuantity(0)}>
                <strong>Remove</strong>
              </Button>
            </span>
          </span>
        </div>
      </Card>
      <br />
    </div>
  );
}

export default ProductInCart;
