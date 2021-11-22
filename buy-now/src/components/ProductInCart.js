//import 'antd/dist/antd.css';
import { Card, Button } from "antd";



function ProductInCart(props) {
  //const {props} = image, name, quantity, price
  return (
    <div >

        <Card className="cart-card" style={{ width: '100%' }}>
          <div className="cart-item">
            <img width="100" src={props.image} alt={props.name}></img>
            <span className="cart-product-detail">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <p>${props.price}</p>
              <p>In Stock</p>
              <span className="cart-edit">
              <div>
                <Button>-</Button>
                &nbsp;
                <div>{props.cart_quantity}</div>
                &nbsp;
                <Button>+</Button>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" danger>
      <strong>Remove</strong>
    </Button>
              </span>
            </span>
          </div>
        </Card>
      <br />
    
    </div>

  );
}

export default ProductInCart;
