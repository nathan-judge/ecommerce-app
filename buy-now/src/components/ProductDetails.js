import { Form, Input, Button, Rate } from "antd";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import "./product-details.scss";
import Reviews from "./Reviews";
const { TextArea } = Input;

function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  console.log("useloc");
  console.log("PARAM ID", id);

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      await axios.post("/api/reviews/" + product.id, {
        product_id: product.id,
        avg_rating: product.avg_rating,
        number_of_ratings: product.number_of_ratings,
        ...values.review
      });
      fetchProduct();
      setShowReviewForm(false);
    } catch (e) {
      console.log("Error submitting review", e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get("/api/product/" + id);
      let product = response.data;
      console.log("********", product);
      setProduct(product.product);
      fetchReviews();
    } catch (e) {
      console.log("Error fetching product details", e);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get("/api/reviews/" + id);
      setReviews(res.data.reviews);
    } catch (e) {
      console.log("Error fetching reviews", e);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div className="product-details-container">
        <div className="product-details">
          <img
            height="200px"
            src={product.thumbnail_photo_url ? product.thumbnail_photo_url : ""}
            alt={product.name}
          ></img>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Rate
              style={{ fontSize: "18px" }}
              allowHalf
              disabled
              value={parseFloat(product.avg_rating)}
            />
            &nbsp;&nbsp;({product.number_of_ratings})
            <div>{product.isSoldOut ? "Out of Stock" : "In Stock"}</div>
            <div>
              <br />
              <span className="price-tag">${product.price}</span>
            </div>
            <br />
            <div style={{display: "flex"}}>
              <Button onClick={() => props.addToCart(product.id)}>
                {props.added(product.id, props.cart)}
              </Button>
              &nbsp;&nbsp;
              <Button
                type="primary"
                onClick={() => setShowReviewForm(!showReviewForm)}
              >
                Add Review
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        {showReviewForm && (
          <Form
            onFinish={onFinish}
            labelCol={{
              span: 2
            }}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name={["review", "username"]}
              rules={[
                {
                  required: true,
                  message: "Please input your name!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Rating"
              name={["review", "rating"]}
              rules={[
                {
                  required: true,
                  message: "Please input your rating!"
                }
              ]}
            >
              <Rate allowHalf defaultValue={props.avg_rating} />
            </Form.Item>
            <Form.Item
              label="Review"
              name={["review", "comment"]}
              rules={[
                {
                  required: true,
                  message: "Please input your review!"
                }
              ]}
            >
              <TextArea showCount maxLength={300} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 2 }}>
              <Button
                htmlType="submit"
                type="primary"
                // onClick={(e) => console.log("EEEE", e.target)}
              >
                Submit
              </Button>{" "}
              &nbsp;
              <Button type="default" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        )}
        {product.id && (
          <div className="reviews-box">
            <Reviews reviews={reviews} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
