import React, { useState } from "react";

import { Button, Form, Input, Modal, Tooltip } from "antd";
import axios from "axios";
import { PlusSquareFilled } from '@ant-design/icons';

const { TextArea } = Input;

const AddProductForm = (props) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const showModal = () => {
    setIsAddModalVisible(true);
  };

  const onFinish = async (values) => {
    console.log("Success:", values.product.name);
    try {
      await axios.post("/api/admin/addProduct", {
        name: values.product.name,
        price: values.product.price,
        quantity: values.product.quantity,
        thumbnail_photo_url: values.product.thumbnail_photo_url,
        description: values.product.description,
        category: values.product.category
      });
      setIsAddModalVisible(false);
      props.fetchProducts()
    } catch (e) {
      console.log("Error adding product", e);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div style={{position: "fixed", bottom: 15, left: 15}}>
      <Tooltip title="Add Product">
      <Button style={{fontSize: "50px", borderRadius: "100%", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", paddingTop: 15, backgroundColor: "#1890ff", color: "#fff", borderColor: "#1890ff"}}  type="link" onClick={showModal}>+</Button>
    </Tooltip>
    </div>
      <Modal
        title="Add Product"
        visible={isAddModalVisible}
        footer={false}
        onCancel={() => setIsAddModalVisible(false)}
      >
        <Form
          onFinish={onFinish}
          labelCol={{
            span: 5,
          }}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name={["product", "name"]}
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
            label="Description"
            name={["product", "description"]}
            rules={[
              {
                required: true,
                message: "Please input your description!"
              }
            ]}
          >
            <TextArea showCount maxLength={300} />
          </Form.Item>
          <Form.Item
            label="quantity"
            name={["product", "quantity"]}
            rules={[
              {
                required: true,
                message: "Please input the price!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name={["product", "price"]}
            rules={[
              {
                required: true,
                message: "Please input the price!"
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image"
            name={["product", "thumbnail_photo_url"]}
            rules={[
              {
                required: true,
                message: "Please post a picture of the product!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name={["product", "category"]}
            rules={[
              {
                required: true,
                message: "Please choose a category!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5 }}>
            <Button
              htmlType="submit"
              type="primary"
              
            >
              Submit
            </Button>{" "}
            &nbsp;
            <Button type="default" onClick={() => setIsAddModalVisible(false)}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default AddProductForm;
