import { Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditPoductList from "./EditProductList";
import DeleteProductForm from "./DeleteProduct";
import axios from "axios";

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
  console.log("props is: ", props);
  console.log("props.image is: ", props.image);

  // const deleteProduct = async () => {

  // };

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
          <Button type="primary" onClick={showEditModal}>
            Edit
          </Button>
          <EditPoductList
            product={props.product}
            isEditModalVisible={isEditModalVisible}
            setIsEditModalVisible={setIsEditModalVisible}
            fetchProducts={props.fetchProducts}
          />
          <Button type="primary" onClick={showDeleteModal}>
            Delete
          </Button>
          <DeleteProductForm
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
