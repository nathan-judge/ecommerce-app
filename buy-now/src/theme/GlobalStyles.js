import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
   
    transition: all 0.50s linear;
  }
  .product-name{
    color: ${({ theme }) => theme.colors.text};
  }
  .nav-bar{
      display:flex;
      justify-content: space-between;
      position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 120px;
        background: ${({ theme }) => theme.colors.navbar};
        padding: 1.5em 1.5em;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        color: black;
  }
  .nav-title {
	color: ${({ theme }) => theme.colors.navTitle};
    font-family: ${({ theme }) => theme.font};
	padding: 0.5em;
}
.price-count{
  color: ${({ theme }) => theme.colors.text};
}
.title-details{
  color: ${({ theme }) => theme.colors.text};
}
.ant-icon{
    color: ${({ theme }) => theme.colors.navTitle};
}
.admin-dashboard h1{
  color: ${({ theme }) => theme.colors.text};
}
.product-info h3{
  color: ${({ theme }) => theme.colors.text};
}
a{
  color: ${({ theme }) => theme.colors.text};
}
.search-icon-btn{
    background-color: ${({ theme }) => theme.colors.searchBtn};
}
.cart h1{
  color: ${({ theme }) => theme.colors.navTitle};
}
  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }
.cart-product-detail{
    color: ${({ theme }) => theme.colors.navTitle};
}
.AddCartBtn {
   background-color: ${({ theme }) => theme.colors.checkoutback};
   color: ${({ theme }) => theme.colors.checkout};
   border: 1px solid ${({ theme }) => theme.colors.checkout};
 }
 .ant-btn{
  background-color: ${({ theme }) => theme.colors.checkoutback};
  color: ${({ theme }) => theme.colors.checkout};
  border: 1px solid ${({ theme }) => theme.colors.checkout};
  font-family: 'Spartan', sans-serif;
 }
 .ant=btn:hover{
   color:blue;
 }
 .product-card-contents{
    background-color: ${({ theme }) => theme.colors.navbar};
    display: flex;
    justify-content: center;
 }
.cart-card{
  background-color: ${({ theme }) => theme.colors.navbar};
}
.cart h3{
  color: ${({ theme }) => theme.colors.text};
}
.ant-btn.addbtn{
    background-color: ${({ theme }) => theme.colors.backitemborder};
}
.ant-btn.AddCartBtn{
  background-color: ${({ theme }) => theme.colors.backitemborder};
}

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
  .nav-title{
    padding-top: 1.1em;
    padding-left: 1em;
}
  .product-title{
    color: ${({ theme }) => theme.colors.text};
    padding-top:0.5em;
  }
  
`;