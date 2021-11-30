import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

import "./nav.scss";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <Link to="/home">
        <h1 className="nav-title">BuyNow!</h1>
      </Link>
        <Searchbar
          searchProduct={props.searchProduct}
          cartTotal={props.cartTotal}
        />
    </div>
  );
}

export default Navbar;
