import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
//CREATE PRODUCT FORM
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Create a new product"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="title"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input the name of product!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[
            {
              required: true,
              message: "Please input the description !",
            },
          ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[
            {
              required: true,
              message: "Please input the price!",
            },
          ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="quantity" label="Quantity" rules={[
            {
              type: 'number',
              required: true,
              message: "Please input the quantity!",
            },
          ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="image" label="Image (url)" rules={[
            {
              required: true,
              message: "Please upload an image!",
            },
          ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[
            {
              required: true,
              message: "Please input the price!",
            },
          ]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Allow product review</Radio>
            <Radio value="private">Disable product review</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        Create Product
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};



function AdminDashboard() {
    return (
      <div className="AdminDashboard">
      <h1 style={{ paddingTop: 100 }}>ADMIN DASHBOARD</h1>
      <CollectionsPage/>
       
      </div>
    );
  }
  
  export default AdminDashboard;