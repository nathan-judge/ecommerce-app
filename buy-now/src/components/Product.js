import { Card, Col, Row, Menu, Button } from "antd";

function Product(props) {
  
  return (
    <div >

        <Card className="cart-card" style={{ width: '100%' }}>
          <div className="cart-item">
            <img height="200px" src={props.image.url} alt={props.name}></img>
            <span className="cart-product-detail">
              <h3>{props.name}</h3>
              <p dangerouslySetInnerHTML={{__html: props.description}}/>
              <span>In Stock: {props.inventory_left}</span>
              <span className="cart-edit">
              <div>
                <Button onClick={() => props.onAddCart(props.id, 1)}>Add to Cart</Button>
              </div>
              <div>
                <Button>Details</Button>
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