import React from "react";
import { Form, Input, Select } from "antd";
import "./checkout.scss";
import { Link } from "react-router-dom";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};
/* eslint-enable no-template-curly-in-string */

function Address() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h3 className="address">Address</h3>
      <Form
        className="address-form"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "address1"]}
          label="Address Line 1"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["user", "address2"]} label="Address Line 2">
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "postalcode"]}
          label="Postal Code"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["address", "province"]}
          label="Select Province"
          rules={[{ required: true }]}
        >
          <Select value="Ontario" style={{ width: 120 }}>
            <Option value="Ontario">Ontario</Option>
            <Option value="Alberta">Alberta</Option>
            <Option value="British Columbia">British Columbia</Option>
            <Option value="Quebec">Quebec</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Address;
