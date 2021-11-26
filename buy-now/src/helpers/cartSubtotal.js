const cartSubtotal = (carts) => {
  let totalAmount = 0;
  let totalItems = 0;
  for (const product of carts) {
    totalAmount += product.price * product.number_of_items;
    totalItems += product.number_of_items
  }
  return {amount: totalAmount, count: totalItems}
}
const modules = {cartSubtotal}
export default modules;