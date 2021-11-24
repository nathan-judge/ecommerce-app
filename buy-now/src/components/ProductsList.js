import ProductListItem from "./ProductListItem";
import "./productHome.scss";
function ProductsList() {
    return (
      <div className="ProductsList">
   <ul className="ProductsUl">
     <li className="ProductsListLi">
    <ProductListItem/>
     </li>
     <li className="ProductsListLi">
    <ProductListItem/>
     </li>
     <li className="ProductsListLi">
    <ProductListItem/>
     </li>
   </ul>
      </div>
    );
  }
  
  export default ProductsList;