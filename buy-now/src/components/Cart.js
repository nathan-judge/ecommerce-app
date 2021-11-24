import ProductInCart from "./ProductInCart";
import "./cart.scss";
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
  return (
    <div className="cart">
    <div className="SubtotalContainer">
<span className="SubtotalCart">
Subtotal: $360
</span>
<button className="CheckoutBtn">Checkout</button>
    </div>

      {carts.map((product) => {
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

  
    </div>
  );
}

export default Cart;
