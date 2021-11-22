import { Card, Col, Row, Menu, Button } from "antd";

const products = [
  { id: 1, name: 'Coding with JavaScript For Dummies', price: 35.63, quantity: 42, thumbnail_photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71PnU2pTHLL.jpg', description: 'Go from beginner to builder quickly with this hands-on JavaScript guide', category: 'Books' },
  { id: 2, name: 'MacBook', price: 2000, quantity: 42, thumbnail_photo_url: 'https://images.macrumors.com/article-new/2013/09/m1-macbook-air-design.jpg', description: 'Expensive Student Laptop', category: 'Computer' }

];
function Product(props) {
  console.log("props are: ", props)
  return (
    <div >

        <Card className="cart-card" style={{ width: '100%' }}>
          <div className="cart-item">
            <img width="100" src={props.image.url} alt={props.name}></img>
            <span className="cart-product-detail">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              <p>In Stock</p>
              <span className="cart-edit">
              <div>
                <Button>Add to Cart</Button>

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