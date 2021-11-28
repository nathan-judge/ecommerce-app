import { Link } from "react-router-dom";
import "./cart.scss"
function EmptyCart() {
  return (
  <h2>
       <Link to="/">Your cart is empty. Please click here.</Link>
       </h2>
  );
}
export default EmptyCart