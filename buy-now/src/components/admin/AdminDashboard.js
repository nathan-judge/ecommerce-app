import AddProductForm from "./AddProductForm";
import AdminProductList from "./AdminProductList";


function AdminDashboard(props) {
    return (
      <div className="adminDashboard">
      <h1 style={{ paddingTop: 100 }}>ADMIN DASHBOARD</h1>
      <AddProductForm />
      <AdminProductList products={props.products} />
      </div>
    );
  }
  
export default AdminDashboard