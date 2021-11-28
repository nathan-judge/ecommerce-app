import { Card, Button, Rate } from "antd";
import { Link } from "react-router-dom";
import "./product-list.scss";
function ProductListItem(props) {
  const id = props.id;

  return (
   
    <div className="product-card-contents">
      <Link to={"/details/" + id}>
        <img
          height="200px"
          src={props.image ? props.image : ""}
          alt={props.name}
        ></img>
      </Link>
      <div className="product-detail">
        <Link to={"/details/" + id}>
          <h3 className="product-name">{props.name}</h3>
        </Link>
       
      </div>
      <div className="price-count">
          <div className="price-tag">${props.price}</div>
          <Button onClick={() => props.addToCart(props.id)}>
            {props.added(props.id, props.cart)}
          </Button>
        </div>
    </div>

  
);
}

export default ProductListItem;
