import React, { useEffect, useState } from 'react'
import './App.css';
import ProductList from './components/ProductList';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';
import axios from 'axios'
import ThemeSelector from './components/admin/ThemeSelector';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;
const App = () => {
  const [products, setProducts] = useState([])
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

useEffect(() => {
  const fetchProducts = async () => {
    try{
      const response = await axios.get('/api/products');
      setProducts(response.data.products);
      console.log('response.data :', response.data);
    } catch (err) {
    }
  }
  fetchProducts();
}, [])

  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>
        
        <ThemeSelector setter={ setSelectedTheme } />
        <ProductList products={products} />
        </Container>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
     