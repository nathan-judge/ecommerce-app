import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from "react";

const COMMANDS = {
  OPEN_CART: 'open-cart'
}

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState()



  useEffect(() => {
    if (alanInstance != null) return
  
    setAlanInstance(

      alanBtn({
        bottom: "100px",
        right: "15px",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: (commandData) => {
         console.log(commandData)
        }
      })
    )
  }, []);
}