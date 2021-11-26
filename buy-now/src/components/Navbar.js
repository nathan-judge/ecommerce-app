import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

import "./nav.scss";

function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1 className="nav-title">BuyNow!</h1>
      </Link>
      <Searchbar />
    </div>
  );
}

export default Navbar;
