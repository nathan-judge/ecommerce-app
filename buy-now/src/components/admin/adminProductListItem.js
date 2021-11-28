import {  Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditPoductList from "./EditProductList"

function AdminProductListItem(props) {
  const id = props.id;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


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
            <div>
            <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <EditPoductList product={props.product} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
            <Button>
              Delete
            </Button>
            </div>
          </div>
      </div>
  
    
  );
}

export default AdminProductListItem;
