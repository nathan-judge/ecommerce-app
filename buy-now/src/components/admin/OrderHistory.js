import axios from "axios";
import { useEffect } from "react";


function OrderHistory(props) {
  
const ordersCount = async () => {
  try {
    const response = await axios.get("/api/admin/order_history");
    const orders = response.data;
    return orders;
    
  }
  catch(e) {
    console.log("Error fetching orders", e)
  }
}
// useEffect(() => {
//   ordersCount()
// }, []);

return (
  <div>
    {/* Total Orders: {ordersCount()} */}
  </div>
)
}
export default OrderHistory;