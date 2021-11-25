import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

import "./nav.scss";
import { PropertySafetyFilled } from "@ant-design/icons";

function Navbar(props) {
  // const { cart } = props
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1>BuyNow!</h1>
      </Link>
      <Searchbar cart={props.cart}/>
    </div>
  );
}

export default Navbar;
