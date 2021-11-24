import "./ProductDetails.scss";
function ProductDetails() {
    return (
      <div className="ProductDetails">
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d5f168f9-f953-4419-ac7a-f0def128176e/renew-run-2-road-running-shoe-nd60pQ.png"className="DetailsImg"/>
        <div className="ProductInfo">
       <span className="DetailsProductName">product</span>

<p className="DeatailsPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper id enim vel pellentesque. Vestibulum malesuada mi at erat elementum, ac dapibus sem viverra. Sed elementum a justo in tristique. Etiam gravida, turpis non semper luctus, sem justo lacinia quam, et rutrum lorem massa nec quam. Sed non aliquam augue, quis semper elit. In condimentum, lorem vel tincidunt porta, elit lacus suscipit dui, eget iaculis neque purus quis lectus. Mauris vel diam eu orci gravida pretium. Aliquam efficitur nibh ornare risus lacinia vestibulum. 
</p>
<span className="DetailsPrice">$50
</span>
<div className="AddCartContainer">
<form className="AddQuantityDetails">
  <input className="AddQuantityDetailsInput" type="number"></input>
  </form>
<button className="DetailsAddCart">Add To Cart</button> 
  </div>
</div>
      </div>
    );
  }
  
  export default ProductDetails;