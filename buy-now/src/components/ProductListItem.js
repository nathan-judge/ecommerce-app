import { Card, Button, Rate } from "antd";
import { Link } from "react-router-dom";
import "./product-list.scss";
function ProductListItem(props) {
  const id = props.id;

  return (
    <Card className="product-card" style={{ width: 300 }}>
      <Link to={"/details/" + id}>
        <img
          height="200px"
          src={props.image ? props.image : ""}
          alt={props.name}
        ></img>
      </Link>
      <span className="product-detail">
        <Link to={"/details/" + id}>
          <h3>{props.name}</h3>
        </Link>
        <div>
          <Rate style={{fontSize: '18px'}} allowHalf disabled defaultValue={parseFloat(props.avg_rating)} />
          &nbsp;&nbsp;({props.number_of_ratings})
        </div>
        <br />
        <div className="price-count">
          <div className="price-tag">${props.price}</div>
          <Button onClick={() => props.addToCart(props.id)}>
            {props.added(props.id, props.cart)}
          </Button>
        </div>
      </span>
      <div></div>
    </Card>
  );
}

export default ProductListItem;
