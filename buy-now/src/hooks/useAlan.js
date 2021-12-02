import alanBtn from "@alan-ai/alan-sdk-web";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const COMMANDS = {
  OPEN_CART: "open-cart",
  SHOW_PRODUCTS: "show-products",
  GO_BACK: "go-back"
};

export default function useAlan() {
  const navigate = useNavigate();
  const [alanInstance, setAlanInstance] = useState();
  // const [cart] = apiHelpers.fetchCart();
  const openCart = useCallback(() => {
    alanInstance.playText("Opening cart");
    setTimeout(()=>{
      navigate("/cart")
    }, 1000)
  }, [alanInstance, navigate]);

  const showProducts = useCallback(() => {
    alanInstance.playText("Showing Products");
    setTimeout(()=>{
      navigate("/home")
    }, 1000)
  }, [alanInstance, navigate]);


  const goBack = useCallback(() => {
    alanInstance.playText("Okay");
    setTimeout(()=>{
      navigate(-1)
    }, 1000)
  }, [alanInstance, navigate]);

  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_CART, openCart);
    window.addEventListener(COMMANDS.SHOW_PRODUCTS, showProducts);
    window.addEventListener(COMMANDS.GO_BACK, goBack);

    return () => {
      window.removeEventListener(COMMANDS.OPEN_CART, openCart);
      window.removeEventListener(COMMANDS.SHOW_PRODUCTS, showProducts);
      window.removeEventListener(COMMANDS.GO_BACK, goBack);

    };
  }, [alanInstance, openCart, showProducts, goBack]);

  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        bottom: "100px",
        right: "15px",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command }) => {
          window.dispatchEvent(new CustomEvent(command));
        }
      })
    );
  }, []);
}
