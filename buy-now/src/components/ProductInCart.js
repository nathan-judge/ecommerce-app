//import 'antd/dist/antd.css';
import { Card,  Button } from "antd";
import { useState, useEffect } from "react";
import { commerce } from '../commerce';

function ProductInCart(props) {
  const [product, setProduct] = useState({is: {}});
  
  const fetchProduct = async() => {
    const localProduct = await commerce.products.retrieve(props.product_id);
    console.log(localProduct, "local")
    setProduct(localProduct);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Card className="cart-card" style={{ width: "100%" }}>
        <div className="cart-item">
          <img height="200px" src={props.image} alt={props.name}></img>
          <span className="cart-product-detail">
            <h3>{props.name}</h3>
            <p dangerouslySetInnerHTML={{__html: product.description}}/>
            <p>{props.price}</p>
            <p>{product.is.sold_out ? "Out of Stock" : "In Stock"}</p>
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
