import { Card, Rate } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

function Reviews(props) {
  return (
    <>
    <h2>Reviews</h2>
      {props.reviews.map((review, key) => (
        <Card key={key} style={{ marginBottom: "5px" }}>
          <div style={{ fontSize: "16px" }}>
            <strong>{review.username}</strong>
          </div>
          <Rate
            style={{ fontSize: "15px" }}
            allowHalf
            disabled
            defaultValue={parseFloat(review.rating)}
          />
          <br />
          <br />
          <div>{review.comment}</div>
        </Card>
      ))}
    </>
  );
}
export default Reviews;
