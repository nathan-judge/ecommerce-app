import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

import "./nav.scss";

function Navbar({cart}) {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1>BuyNow!</h1>
      </Link>
      <Searchbar cart={cart} />
    </div>
  );
}

export default Navbar;
