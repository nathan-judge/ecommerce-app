import { Card, Col, Row, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./ProductList.scss";

function Product(props) {
console.log('props in product:', props);
 
  return (
   
    <div className="ProductListItem">

            <img src={props.image ? props.image : ""} alt={props.name} className="ProductImg"></img>
              {/* <p dangerouslySetInnerHTML={{__html: props.description}}/> */}
              <div className="add-details">
              {/* <span className="ProductName">{props.name}</span> */}
         
             
              <span className="ProductPrice">$ {props.price}</span>
              <span className="instock">{props.isSoldOut? "Out of Stock" : "In Stock"}</span>
            <div className="AddDetailsCon">
                <Button onClick={() => props.onAddCart(props.id, 1)}
                className="addbtn">Add to Cart</Button>
             
            
                <Link to={'/details'} productDetailID={props}>
                  <Button onClick={() => console.log("props.id is: ", props.id)} className="AddCartBtn">Details</Button>
                </Link>
                </div>
          </div>
    </div>
  
  )
}

export default Product;