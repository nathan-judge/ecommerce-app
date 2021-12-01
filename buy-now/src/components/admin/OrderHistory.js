import { Card } from "antd";
import { useEffect, useState } from "react";
import apiHelpers from "../../helpers/apiHelpers";
import "./admin-product-list.scss";

function OrderHistory(props) {
const [count, setCount] = useState(0)
  
const ordersCount = async () => {
  try {
    const ordersCount = await apiHelpers.totalOrders();
    setCount(ordersCount)
    
  }
  catch(e) {
    console.log("Error fetching orders", e)
  }
}
useEffect(() => {
  ordersCount()
}, []);

return (
  <div className="display-flex" style={{justifyContent: "center"}}>
    <Card style={{width: 300, borderRadius: "5px"}}>
      <div className="display-flex" style={{justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%"}}>
      <h2>Total Orders</h2>
      <h3>{count}</h3>
      </div>
    </Card>
  </div>
)
}
export default OrderHistory;