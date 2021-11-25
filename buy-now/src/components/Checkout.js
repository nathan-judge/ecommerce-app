import { Collapse, Form, Input, Select, Button } from "antd";
import { useState } from "react";
import "./checkout.scss";
import Payment from "./Payment";
const { Panel } = Collapse;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 4
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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Checkout() {
  const [activeKey, setActiveKey] = useState("1");
  const [address, setAddress]= useState({})
  const onFinish = (values) => {
    console.log(values);
    setAddress(values.address)
    setActiveKey("2");
  };

  return (
    <Collapse accordion className="checkout" activeKey={activeKey}>
      <Panel header="Enter Address Details" key="1">
        <Form
          className="address-form"
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{ address: { address2: "" } }}
        >
          <Form.Item
            name={["address", "name"]}
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
            name={["address", "email"]}
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
            name={["address", "address1"]}
            label="Address Line 1"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["address", "address2"]} label="Address Line 2">
            <Input />
          </Form.Item>
          <Form.Item
            name={["address", "postalcode"]}
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
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Panel>
      <Panel header="Review Order" key="2">
        <Button type="primary" onClick={() => setActiveKey("3")}>
          Proceed
        </Button>
      </Panel>
      <Panel header="Enter Payment Details" key="3">
        <Payment address={address}/>
      </Panel>
    </Collapse>
  );
}
export default Checkout;
