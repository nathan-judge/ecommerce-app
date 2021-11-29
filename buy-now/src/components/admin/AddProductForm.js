import React, { useState } from "react";

import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
const { TextArea } = Input;

const AddProductForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleSubmit = (values) => {
  //   console.log('ADDPRODUCT***', values)
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

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
      setIsModalVisible(false);
    } catch (e) {
      console.log("Error submitting review", e);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        visible={isModalVisible}
        // onOk={handleSubmit}
        // onCancel={handleCancel}
        // okText="Submit"
        footer={false}
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
            <Button type="default" onClick={() => setIsModalVisible(false)}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default AddProductForm;
