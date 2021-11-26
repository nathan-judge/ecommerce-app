import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import axios from "axios";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductDetails from "./components/ProductDetails";
import helpers from "./helpers/cartSubtotal";
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import ThemeSelector from "./components/admin/ThemeSelector";
const Container = styled.div`
  margin: 5px auto 5px auto;
`;
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

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

  const added = (productId) => {
    for (const product of cart) {
      if (product.product_id === productId) {
        return "Added to Cart";
      }
    }
    return "Add to Cart";
  };
  const fetchCart = async () => {
    try {
      const cartId = localStorage.getItem("cart_id");
      const url = "/api/cart/" + cartId;
      const res = await axios.get(url);

      console.log("pppp", res.data);
      let newCart = res.data.cart;
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
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    } catch (err) {
      console.log("Error fetching products", err);
    }
  };
  const addToCart = async (productId) => {
    try {
      const cartId = localStorage.getItem("cart_id");

      console.log("cartId :", cartId);

      const url = "/api/cart/" + cartId;
      console.log("before aci", productId);
      const res = await axios.post(url, {
        product_id: productId,
        cart_id: cartId
      });
      console.log("pppp", res.data);
      if (!cartId) {
        localStorage.setItem("cart_id", res.data.cart_id);
      }
      fetchCart();
    } catch (e) {
      console.log("Error adding to cart", e);
    }
  };

  const searchProduct = async (value) => {
    try {
      const response = await axios.get("api/products/search?term=" + value);
      let productToShow = response.data.products;
      console.log("productstoshow", productToShow);
      setProducts(productToShow);
    } catch (e) {
      console.log("Error searching the product", e);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


return (
  <>
  {
    themeLoaded && <ThemeProvider theme={ selectedTheme }>
      <GlobalStyles/>
      <Container style={{fontFamily: selectedTheme.font}}>
      <ThemeSelector setter={ setSelectedTheme } />
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
              added={added}
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/details/:id"
          element={
            <ProductDetails added={added} addToCart={addToCart} cart={cart} />
          }
        />
      </Routes>
    </BrowserRouter>
      </Container>
    </ThemeProvider>

    
  }
  </>
);
}

export default App;
