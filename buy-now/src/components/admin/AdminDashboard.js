import AddProductForm from "./AddProductForm";
import AdminProductList from "./AdminProductList";
import ThemeSelector from "./ThemeSelector";
import OrderHistory from "./OrderHistory";

function AdminDashboard(props) {
  
    return (
      <div className="admin-dashboard">
        <ThemeSelector setter={props.setSelectedTheme} />
      <h1 >ADMIN DASHBOARD</h1>
      <OrderHistory fetchcart={props.fetchCart} />
      <AddProductForm fetchProducts={props.fetchProducts} />
      <AdminProductList products={props.products} fetchProducts={props.fetchProducts} />
      </div>
    );
  }
  
export default AdminDashboard