const cartSubtotal = (carts) => {
  let totalAmount = 0;
  let totalItems = 0;
  for (const product of carts) {
    totalAmount += product.price * product.number_of_items;
    totalItems += product.number_of_items
  }
  return {amount: totalAmount, count: totalItems}
}

const added = (productId, cart) => {
  for (const product of cart) {
    if (product.product_id === productId) {
      return "Added to Cart";
    }
  }
  return "Add to Cart";
};

const modules = {cartSubtotal, added}
export default modules;