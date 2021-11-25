import "./search.scss";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge } from "antd";

function Searchbar() {
  console.log("local storage.cartItems is: ", localStorage.cartItems.length)
  return (
    <div className="forms">
      <form className="search" action="/" method="get">
        <input
          className="search-text"
          type="text"
          placeholder="Search"
          name="item-to-find"
        ></input>
        <button>
          <SearchOutlined className="search-icon" />
        </button>
      </form>

      <Link to={`/cart`}>
        <Badge offset={[-10, 12]} count={localStorage.length}>
        
          <ShoppingCartOutlined  size="large" className="ant-icon" />
        </Badge>
      </Link>
    </div>
  );
}

export default Searchbar;











































// import "./search.scss";
// import { ShoppingCartOutlined, SearchOutlined, PropertySafetyFilled } from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import { Badge } from "antd";

// function Searchbar(props) {
  
//   return (
//     <div className="forms">
//       <form className="search" action="/" method="get">
//         <input
//           className="search-text"
//           type="text"
//           placeholder="Search"
//           name="item-to-find"
//         ></input>
//         <button>
//           <SearchOutlined className="search-icon" />
//         </button>
//       </form>

//       <Link to={`/cart`}>
//         <Badge offset={[-10, 12]} count={props.cart.length}>
        
//           <ShoppingCartOutlined  size="large" className="ant-icon" />
//         </Badge>
//       </Link>
//     </div>
//   );
// }

// export default Searchbar;
// 