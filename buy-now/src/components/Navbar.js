import Searchbar from "./SearchBar";
import './nav.scss'

function Navbar() {
  return (
    <div className="nav-bar">
      <h1>BuyNow!</h1>
     <Searchbar />
    </div>
  );
}

export default Navbar;