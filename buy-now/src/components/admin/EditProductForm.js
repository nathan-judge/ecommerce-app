import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
const { TextArea } = Input;

const EditProductForm = (props) => {
  const id = props.product.id;

  const onFinish = async (values) => {
    
    try {
      await axios.post("/api/admin/edit_product/" + id, {
        name: values.product.name,
        price: values.product.price,
        quantity: values.product.quantity,
        thumbnail_photo_url: values.product.thumbnail_photo_url,
        description: values.product.description,
        category: values.product.category
      });
      props.setIsEditModalVisible(false);
      props.fetchProducts()
    } catch (e) {
      console.log("Error updating product", e);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Modal
        title="Edit Product"
        visible={props.isEditModalVisible}
        // onOk={handleSubmit}
        onCancel={() => props.setIsEditModalVisible(false)}
        // okText="Submit"
        footer={false}
      >
        <Form
          initialValues={{ product: props.product }}
          onFinish={onFinish}
          labelCol={{
            span: 5
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
            <TextArea showCount maxLength={500} />
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
              onClick={(e) => console.log(id)}
            >
              Submit
            </Button>{" "}
            &nbsp;
            <Button
              type="default"
              onClick={() => props.setIsEditModalVisible(false)}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default EditProductForm;
