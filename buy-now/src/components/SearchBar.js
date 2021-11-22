import "./search.scss";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge } from "antd";

function Searchbar() {
  return (
    <div className="forms">
      <form className="search" action="/" method="get">
        <input
          className="search-text"
          type="text"
          placeholder="Search"
          name="item-to-find"
        ></input>
        <button className="search-icon-btn">
          <SearchOutlined className="search-icon" />
        </button>
        <Badge offset={[-5, 12]} count={5}>
          <ShoppingCartOutlined  size="large" className="ant-icon" />
        </Badge>
      </form>

    
      
    
    </div>
  );
}

export default Searchbar;
