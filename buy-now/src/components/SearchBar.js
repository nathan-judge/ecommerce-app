import React from "react";
import "./search.scss";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge } from "antd";

function Searchbar(props) {
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
        <Badge offset={[-10, 12]} count={props.cartTotal}>
          <ShoppingCartOutlined size="large" className="ant-icon" />
        </Badge>
      </Link>
    </div>
  );
}

export default Searchbar;
