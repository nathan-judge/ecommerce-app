import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductDetails from "./components/ProductDetails";
import helpers from "./helpers/helpers";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "./theme/GlobalStyles";
import { useTheme } from "./theme/useTheme";
import { Widget, addResponseMessage } from "react-chat-widget";
import apiHelpers from "./helpers/apiHelpers";
import "react-chat-widget/lib/styles.css";
import { io } from "socket.io-client";
import useAlan from "./hooks/useAlan"

const socket = io("http://localhost:8000");

function App() {
  const Container = styled.div`
    margin: 5px auto 5px auto;
  `;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useAlan()


  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  const fetchCart = async () => {
    try {
      const newCart = await apiHelpers.fetchCart();
      setCart(newCart);
      const cartCountAndTotal = helpers.cartSubtotal(newCart);
      setItemsCount(cartCountAndTotal.count);
      setSubtotal(cartCountAndTotal.amount);
    } catch (e) {
      console.log("Error fetching new cart", e);
    }
  };
  const fetchProducts = async () => {
    try {
      const products = await apiHelpers.fetchProducts();
      setProducts(products);
    } catch (err) {
      console.log("Error fetching products", err);
    }
  };
  const addToCart = async (productId) => {
    try {
      const cartId = localStorage.getItem("cart_id");
      const newCartId = await apiHelpers.addToCart(productId)

      if (!cartId) {
        localStorage.setItem("cart_id", newCartId);
      }
      fetchCart();
    } catch (e) {
      console.log("Error adding to cart", e);
    }
  };

  const searchProduct = async (value) => {
    try {
      let productToShow = await apiHelpers.searchProduct(value);
      setProducts(productToShow);
    } catch (e) {
      console.log("Error searching the product", e);
    }
  };

  useEffect(() => {
    addResponseMessage(
      "Welcome to BuyNow!"
    );
    socket.on("receive-message", (message) => {
      addResponseMessage(message);
    });
  }, []);
  const handleNewUserMessage = (newMessage) => {
    //to send message use 'emit' emit will emit messages including themselves (broadcast doesn't include themselves)
    socket.emit("send-message", newMessage);
    //to listen for messages use 'on'
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Navbar cartTotal={cart.length} searchProduct={searchProduct} />
            <Routes>
              <Route
                path="/"
                element={
                  <ProductList
                    products={products}
                    fetchCart={fetchCart}
                    cart={cart}
                    added={helpers.added}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path="/home"
                element={
                  <ProductList
                    products={products}
                    fetchCart={fetchCart}
                    cart={cart}
                    added={helpers.added}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    itemsCount={itemsCount}
                    subtotal={subtotal}
                    fetchCart={fetchCart}
                    setCart={setCart}
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminDashboard
                    products={products}
                    setSelectedTheme={setSelectedTheme}
                    fetchProducts={fetchProducts}
                    cart={cart}
                    fetchCart={fetchCart}
                  />
                }
              />
              <Route
                path="/details/:id"
                element={
                  <ProductDetails
                    added={helpers.added}
                    addToCart={addToCart}
                    cart={cart}
                  />
                }
              />
            </Routes>
            <Widget
              senderPlaceHolder="Type a message..."
              title={`Welcome!`}
              subtitle="Chatbox!"
              handleNewUserMessage={handleNewUserMessage}
            />
          </BrowserRouter>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
