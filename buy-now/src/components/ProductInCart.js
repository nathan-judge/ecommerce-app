import { Card, Button } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductInCart(props) {
  const [cartQuantity, setCartQuantity] = useState(props.cart_quantity);

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
          <Link to={"/details/" + props.product_id}>
            <img height="100px" src={props.image} alt={props.name}></img>
          </Link>
          <span className="cart-product-detail">
            <h3 className="product-cart-name"> {props.name}</h3>
            <p>{props.description}</p>
            <p>${props.price}</p>
            <p>{props.product_quantity < 1 ? "Out of Stock" : "In Stock"}</p>
            <div className="cart-edit">
              <div>
                <Button disabled={cartQuantity <= 1} onClick={() => changeQuantity(cartQuantity - 1)}>
                  -
                </Button>
                <div className="cart-quantity">{props.cart_quantity}</div>
                <Button disabled={cartQuantity >= props.product_quantity} onClick={() => changeQuantity(cartQuantity + 1)}>
                  +
                </Button>
                
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" danger onClick={() => changeQuantity(0)}>
                <strong>Remove</strong>
              </Button>
            </div>
          </span>
        </div>
      </Card>
      <br />
    </div>
  );
}

export default ProductInCart;
