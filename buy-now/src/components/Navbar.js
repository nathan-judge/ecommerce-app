import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";
import "./nav.scss";


function Navbar(props) {
  // const { cart } = props
  return (
    <div className="nav-bar">
   <a href="https://github.com/nathan-judge/ecommerce-app" className="githubIcon"> <GithubOutlined/></a>

         <Link to="/home">
         <h1 className="nav-title">BuyNow</h1>
      </Link> 
     
   
       
      <Searchbar searchProduct={props.searchProduct} cartTotal={props.cartTotal}/>
    </div>
  );
}

export default Navbar;
