import { Link } from "react-router-dom";
import "./cart.scss"
function EmptyCart() {
  return (
    <div>
      <h3>Your cart is empty.</h3>Go to <Link to="/">Home page</Link>.
    </div>
  );
}
export default EmptyCart