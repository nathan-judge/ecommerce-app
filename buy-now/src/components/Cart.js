import ProductInCart from "./ProductInCart";
import { Button, notification, Tooltip } from "antd";
import StripeCheckout from "react-stripe-checkout";
import EmptyCart from "./EmptyCart";
import "./cart.scss";
import apiHelpers from "../helpers/apiHelpers";
import helpers from "../helpers/helpers"

function Cart(props) {
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success!",
      description:
        "Payment successful. You will receive an email with the order confirmation!"
    });
  };

  const handleToken = async (token, address) => {
    try {
      await apiHelpers.checkout({
        token,
        address,
        cart: props.cart,
        subtotal: props.subtotal,
        cart_id: localStorage.getItem("cart_id")
      });
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
                product_quantity={product.quantity}
                price={product.price}
                fetchCart={props.fetchCart}
              />
            );
          })}

          <div className="cart-total">
            <h3>
              Subtotal ({props.itemsCount} items):${props.subtotal}
            </h3>
            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
              token={handleToken}
              shippingAddress
              billingAddress
              amount={props.subtotal * 100}
            >
              {helpers.isCartValid(props.cart) ? (
              <Button
                style={{ fontFamily: "'Spartan', sans-serif" }}
                className="btn btn-primary"
              >
                Checkout
              </Button>
              ) : (
                <Tooltip title="Some items in the cart are out of stock. Please remove them before proceeding!">
                <Button disabled="true">Checkout</Button>
                </Tooltip>
              )}

            </StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
