import { Button } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import "./product-details.scss";

function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log("useloc");
  console.log("PARAM ID", id);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("/api/product/" + id);
      let product = response.data;
      console.log("********", product);
      setProduct(product.product);
    } catch (e) {
      console.log("Error fetching product details", e);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="product-details">
      <img
        height="200px"
        src={product.thumbnail_photo_url ? product.thumbnail_photo_url : ""}
        alt={product.name}
      ></img>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div>{product.isSoldOut ? "Out of Stock" : "In Stock"}</div>
        <div>
          <br/>
        <span className="price-tag">${product.price}</span>
       </div>
       <br/>
        <div>

          <Button onClick={()=>props.addToCart(product.id)}>{props.added(product.id, props.cart)}</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
