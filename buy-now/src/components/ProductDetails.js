import ProductInCart from "./ProductInCart";
import "./cart.scss";
import { commerce } from '../commerce';
import { useState, useEffect } from "react";
import "./productDetails.scss"
import { Card, Col, Row, Menu, Button } from "antd";


function ProductDetails(props) {
console.log('props in details :', props);
const handlechange = (e) => {
  props.onchange(e.target.value)
}
    return (
      <div className="details">
        
        <Card className="cart-card" style={{ width: '100%' }}>
          <div className="cart-item">
            <img height="200px" src={props.image} alt={props.name}></img>
            <span className="cart-product-detail">
              <h3>{props.name}</h3>
              <p dangerouslySetInnerHTML={{__html: props.description}}/>
              
              <span>{props.isSoldOut? "Out of Stock" : "In Stock"}</span>
              <span className="cart-edit">
              <div>
                <Button onClick={handlechange}>Details</Button>
              </div>
          
              </span>
            </span>
          </div>
        </Card>
      <br />
    
    </div>
    );
  }
  
export default ProductDetails;