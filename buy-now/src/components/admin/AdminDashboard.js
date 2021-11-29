import AddProductForm from "./AddProductForm";
import AdminProductList from "./AdminProductList";
import ThemeSelector from "./ThemeSelector";

function AdminDashboard(props) {
  
    return (
      <div className="adminDashboard">
        <ThemeSelector setter={props.setSelectedTheme} />
      <h1 style={{ paddingTop: 100 }}>ADMIN DASHBOARD</h1>
      <AddProductForm fetchProducts={props.fetchProducts} />
      <AdminProductList products={props.products} fetchProducts={props.fetchProducts} />
      </div>
    );
  }
  
export default AdminDashboard