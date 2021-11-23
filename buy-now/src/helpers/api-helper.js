import { commerce } from "../commerce";
const modules = {
  async fetchCart() {
    return await commerce.cart.retrieve();
    // console.log("cart", cart);
    // setLineItems(cart.line_items);
    // setCart(cart);
    // setLoading(false);
  },
  async fetchProduct(productId) {
    return await commerce.products.retrieve(productId);
    // console.log(localProduct, "local");
    // setProduct(localProduct);
  },
  async updateCart(lineItemId, obj) {
    await commerce.cart.update(lineItemId, obj);
  }
};
export default modules;
