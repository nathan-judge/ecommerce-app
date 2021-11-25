import { Card, Col, Row, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./ProductList.scss";

function Product(props) {
console.log('props in product:', props);
 
  return (
    <div className="ProductListItem">

       
          <div className="cart-item">
            <img src={props.image ? props.image : ""} alt={props.name} className="ProductImg"></img>
            
              <h3>{props.name}</h3>
              {/* <p dangerouslySetInnerHTML={{__html: props.description}}/> */}
              
              <span>{props.isSoldOut? "Out of Stock" : "In Stock"}</span>
              <span className="cart-edit">
              <div>
                <Button onClick={() => props.onAddCart(props.id, 1)}>Add to Cart</Button>
              </div>
              <div>
                <Link to={'/details'} productDetailID={props}>
                  <Button onClick={() => console.log("props.id is: ", props.id)} className="AddCartBtn">Details</Button>
                </Link>
               
                
              </div>
          
              
            </span>
          </div>
       
      <br />
    
    </div>
  )
}

export default Product;