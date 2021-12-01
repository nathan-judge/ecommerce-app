import { Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditProductForm from "./EditProductForm";
import DeleteProductForm from "./DeleteProductForm";

import "./admin-product-list.scss"


function AdminProductListItem(props) {
  const id = props.id;
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };
  const showDeleteModal = () => {
    setIsDeleteModalVisible(true);
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
        <div className="stock-price" >
        <div className="price-tag">${props.price}</div>
        <div>Stock: {props.quantity}</div>
        </div>
        <div className="display-flex">
          <Button type="primary" onClick={showEditModal}>
            Edit
          </Button>
          <EditProductForm
            product={props.product}
            isEditModalVisible={isEditModalVisible}
            setIsEditModalVisible={setIsEditModalVisible}
            fetchProducts={props.fetchProducts}
          />
          &nbsp;&nbsp;
          <Button type="primary" onClick={showDeleteModal}>
            Delete
          </Button>
          <DeleteProductForm
            fetchCart={props.fetchCart}
            product={props.product}
            isDeleteModalVisible={isDeleteModalVisible}
            setIsDeleteModalVisible={setIsDeleteModalVisible}
            fetchProducts={props.fetchProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminProductListItem;
