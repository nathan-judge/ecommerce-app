import React, { useState } from "react";
import "./search.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useLocation } from "react-router";

// import axios from "axios";

function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();
  console.log('PATH', pathname)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    props.searchProduct(event.target.value);
  };
  return (
    <div className="forms">
      {pathname !== "/cart" && (
        <div className="search">
          <input
            className="search-text"
            type="text"
            placeholder="Search Products"
            name="item-to-find"
            value={searchTerm}
            onChange={handleSearchChange}
          ></input>
        </div>
      )}
      {pathname !== "/admin" && (
        <Link to={`/cart`}>
          <Badge offset={[-10, 12]} count={props.cartTotal}>
            <ShoppingCartOutlined size="large" className="ant-icon" />
          </Badge>
        </Link>
      )}
    </div>
  );
}

export default Searchbar;
