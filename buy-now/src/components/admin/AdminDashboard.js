import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import axios from 'axios';
const {TextArea} = Input
//CREATE PRODUCT FORM
const addProductForm = () => {
  const onFinish = async (values) => {
    console.log("Success:", values.product.name);
    try {
      await axios.post("/api/admin/addProduct" ,{
          
      name: values.product.name,
      price: values.product.price,
      quantity: values.product.quantity,
      image: values.product.thumbnail_photo_url,
      description: values.product.description,
      category: values.product.category
      });
     
    } catch (e) {
      console.log("Error submitting review", e);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    
  
      <Form
            onFinish={onFinish}
            labelCol={{
              span: 2
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


            <Form.Item wrapperCol={{ offset: 2 }}>
              <Button
                htmlType="submit"
                type="primary"
                onClick={(e) => console.log("EEEE", e.target)}
              >
                Submit
              </Button>{" "}
              &nbsp;
              <Button type="default" onClick={() => (false)}>
                Cancel
              </Button>
            </Form.Item>
      </Form>      
    
  );
};
export default addProductForm

function AdminDashboard() {
    return (
      <div className="AdminDashboard">
      <h1 style={{ paddingTop: 100 }}>ADMIN DASHBOARD</h1>
      
    <addProductForm />
       
      </div>
    );
  }
  
