import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-image: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
   
    transition: all 0.50s linear;
  }
  .nav-bar{
      display:flex;
      justify-content: space-between;
      position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 120px;
        background: ${({ theme }) => theme.colors.navbar};
        padding: 1.5em 1.5em;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
  }
  .nav-title {
	color: ${({ theme }) => theme.colors.navTitle};
    font-family: ${({ theme }) => theme.font};
	padding: 0.5em;
}
.ant-icon{
    color: ${({ theme }) => theme.colors.navTitle};
}
.search-icon-btn{
    background-color: ${({ theme }) => theme.colors.searchBtn};
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

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;