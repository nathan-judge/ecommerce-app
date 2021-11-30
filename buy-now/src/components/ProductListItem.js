import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import helpers from "../helpers/helpers";
import "./product-list.scss";

function ProductListItem(props) {
  const id = props.id;

  return (
    <div className="product-card-contents" style={{ width: 300 }}>
      <Link to={"/details/" + id}>
        <img
          height="200px"
          src={props.image ? props.image : ""}
          alt={props.name}
        ></img>
      </Link>
      <span className="product-detail">
        <Link to={"/details/" + id}>
          <h3 className="product-title">{props.name}</h3>
        </Link>
        <div>
          <Rate
            style={{ fontSize: "18px" }}
            allowHalf
            disabled
            defaultValue={parseFloat(props.avg_rating)}
          />
          &nbsp;&nbsp;({props.number_of_ratings})
        </div>
        <br />
        <div>
          <div className="price-count">
            <div className="price-tag">${props.price}</div>
            <div>{props.quantity < 1 ? "Out of Stock" : "In Stock"}</div>
          </div>
          {props.quantity < 1 || helpers.isAddToCartDisabled(props.cart, props.id) ? (
            <Button disabled={true}>Add to cart</Button>
          ) : (
            <Button onClick={() => props.addToCart(props.id)}>
              {props.added(props.id, props.cart)}
            </Button>
          )}
        </div>
      </span>
      <div></div>
    </div>
  );
}

export default ProductListItem;
