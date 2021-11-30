import { Button, Form, Modal } from "antd";
import apiHelpers from "../../helpers/apiHelpers"


const DeleteProductForm = (props) => {
  const id = props.product.id;

  const onFinish = async () => {
    try {
      await apiHelpers.deleteProduct(id);
      props.fetchProducts();
      props.setIsDeleteModalVisible(false);
    } catch (e) {
      console.log("Error deleting product", e);
    }
  };
  

  return (
    <div>
      <Modal
        title="Delete Product"
        visible={props.isDeleteModalVisible}
        footer={false}
        onCancel={() => props.setIsDeleteModalVisible(false)}
      >
        <Form
          initialValues={{ product: props.product }}
          onFinish={onFinish}
          labelCol={{
            span: 5
          }}
          
        >
          <p>Are you sure you want to delete this product?</p>
          <Form.Item>
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
              onClick={() => props.setIsDeleteModalVisible(false)}
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default DeleteProductForm;
