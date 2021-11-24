import { Card, Col, Row, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";


function Product(props) {
console.log('props in product:', props);
 
  return (
    <div >

        <Card className="cart-card" style={{ width: '100%' }}>
          <div className="cart-item">
            <img height="200px" src={props.image ? props.image.url : ""} alt={props.name}></img>
            <span className="cart-product-detail">
              <h3>{props.name}</h3>
              <p dangerouslySetInnerHTML={{__html: props.description}}/>
              
              <span>{props.isSoldOut? "Out of Stock" : "In Stock"}</span>
              <span className="cart-edit">
              <div>
                <Button onClick={() => props.onAddCart(props.id, 1)}>Add to Cart</Button>
              </div>
              <div>
                <Link to={'/details'} productDetailID={props}>
                  <Button onClick={() => console.log("props.id is: ", props.id)}>Details</Button>
                </Link>
               
                
              </div>
          
              </span>
            </span>
          </div>
        </Card>
      <br />
    
    </div>
  )
}

export default Product;