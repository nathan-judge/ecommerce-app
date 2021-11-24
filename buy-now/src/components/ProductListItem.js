import "./productHome.scss";
function ProductListItem() {
    return (
      <div className="ProductListItem">
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d5f168f9-f953-4419-ac7a-f0def128176e/renew-run-2-road-running-shoe-nd60pQ.png"className="ProductImg"/>
       <span
       className="ProductName">ProductName</span>
      <span className="ProductPrice">$200</span>
      <button className="AddCartBtn">View</button>

      </div>
    );
  }
  
  export default ProductListItem;