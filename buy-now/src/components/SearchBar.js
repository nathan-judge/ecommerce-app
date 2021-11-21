import "./search.scss";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";


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
        <button >
          <SearchOutlined className="search-icon" />
        </button>
      </form>
      
      
      <form className="my-cart" action="/" method="get">
        
        <ShoppingCartOutlined className="ant-icon" />
        
      </form>
      <p className="items-in-cart">2</p>
    </div>
  );
}

export default Searchbar;
