import ProductInCart from "./ProductInCart";
import helpers from "../helpers/cartSubtotal"
import "./cart.scss";
import { useState, useEffect } from "react";
import axios from "axios";
const carts = [
  {
    product_id: 1,
    name: "Shoes",
    description: "Red shoes for hiking",
    image: 'https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg',
    product_quantity: 50,
    number_of_items: 12,
    price: 120
  },
  {
    product_id: 2,
    name: "Jacket",
    description: "Blue jacket for winter",
    image: 'https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg',
    product_quantity: 25,
    number_of_items: 1,
    price: 1220
  },
  {
    product_id: 3,
    name: "Hats",
    description: "Cool hat for summer",
    image: 'https://m.media-amazon.com/images/I/61OckGLlZUL._AC_UL320_.jpg',
    product_quantity: 150,
    number_of_items: 3,
    price: 20
  }
];


function Cart() {
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const cartId = localStorage.getItem("cart_id")
    const url = "/api/cart/" //+ cartId
    axios.get(url)
    .then((res) => {
      console.log(res.data)
    })
    .catch()
    setCart(carts)
    const cartCountAndTotal = helpers.cartSubtotal(cart)
    setItemsCount(cartCountAndTotal.count)
    setSubtotal(cartCountAndTotal.amount)
  }, [cart, itemsCount, subtotal]);

  return (
    <div className="cart">
      <h1>My Cart</h1>

      {cart.map((product) => {
        return (
          <div>
            <ProductInCart
              name={product.name}
              product-id={product.product_id}
              image={product.image}
              description={product.description}
              cart_quantity={product.number_of_items}
              product_quantity={product.product_quantity}
              price={product.price}
            />
          </div>
        );
      })}

      <h3 className="cart-total">Subtotal({itemsCount} items):${subtotal}</h3>
    </div>
  );
}

export default Cart;
