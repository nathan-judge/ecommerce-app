import axios from "axios";
import EditProductForm from "../components/admin/EditProductForm";

const apiHelpers = {
  /**
   * Fetch cart using cart id from local storage
   * @returns {Promise<Array>}
   */
  async fetchCart() {
    const cartId = localStorage.getItem("cart_id");
    const url = "/api/cart/" + cartId;
    const res = await axios.get(url);
    return res.data.cart;
  },

  /**
   * Fetch all products
   * @returns {Promise<Array>}
   */
  async fetchProducts() {
    const response = await axios.get("/api/products");
    return response.data.products;
  },
  /**
   * Add a product to the cart
   * @param {Number} productId
   * @returns {Promise<String>}
   */
  async addToCart(productId) {
    const cartId = localStorage.getItem("cart_id");
    const url = "/api/cart/" + cartId;
    const res = await axios.post(url, {
      product_id: productId,
      cart_id: cartId
    });

    return res.data.cart_id;
  },
  /**
   * Search product
   * @param {String} value
   * @returns {Promise<Array>}
   */
  async searchProduct(value) {
    const response = await axios.get("api/products/search?term=" + value);
    return response.data.products;
  },
  /**
   * Place order after payment
   * @param {Object} data
   */
  async checkout(data) {
    await axios.post("/api/checkout", data);
  },
/**
 * Add new review
 * @param {Number} productId 
 * @param {Object} data 
 */
  async postReview(productId, data) {
    await axios.post("/api/reviews/" + productId, data);
  },
/**
 * Fetch product
 * @param {Number} productId 
 * @returns {Promise<Object>}
 */
  async fetchProduct(productId) {
    const response = await axios.get("/api/product/" + productId);
    return response.data.product;
  },
  /**
   * Fetch reviews for product
   * @param {Number} productId 
   * @returns {Promise<Array>}
   */
  async fetchReviews(productId) {
    const response = await axios.get("/api/reviews/" + productId);
    return response.data.reviews;
  },
/**
 * Update cart
 * @param {Object} data 
 */
  async updateCart(data) {
    const cartId = localStorage.getItem("cart_id");
      await axios.post("/api/cart/" + cartId, {
        ...data,
        cart_id: cartId
      });
  },
  /**
   * Add product
   * @param {Object} data 
   */
  async addProduct(data) {
    await axios.post("/api/admin/addProduct", data)
  },
/**
 * Delete product
 * @param {Number} id 
 */
  async deleteProduct(id) {
    await axios.post("/api/admin/delete_product/" + id)
  },
/**
 * Edit Product
 * @param {Number} id 
 * @param {Object} data 
 */
  async EditProduct(id, data) {
    await axios.post("/api/admin/edit_product/" + id, data)
  },
/**
 * Total Orders count
 * @returns {Promise<Number>}
 */
  async totalOrders() {
    const response =await axios.get("/api/admin/order_history")
    return response.data
  }
};

export default apiHelpers;
