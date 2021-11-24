import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import ThemeSelector from './components/admin/ThemeSelector';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import AddProductForm from './components/admin/AddProductForm';



// 2: Create a cotainer
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  // 3: Get the selected theme, font list, etc.
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

  // 5: Render if the theme is loaded.
  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
              
        <Navbar/>
        
        <ThemeSelector setter={ setSelectedTheme } />
        <ProductsList/>
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <AddProductForm/> */}
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
