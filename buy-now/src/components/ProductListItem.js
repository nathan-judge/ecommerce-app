import { Card, Col, Row, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

function generateRandomString() {
  let char = "JaLbVIcdKeOWUfYMNXghiTGjkHlmnQoSpqrRFstZuPvCwxBDyzA";
  let output = "";
  for (let i = 0; i < 6; i++) {
    if (i !== 1 && i !== 5) {
      const random = Math.floor(Math.random() * 51);
      output += char[random];
    } else {
      output += Math.floor(Math.random() * 9);
    }
  }
  return output;
}

function Product(props) {
  const [cartState, setCartState] = useState([])
  
  const addToCart = async (cartid) => {
    let id = localStorage.getItem("cartId");
    if(!id) {
      //if the cart is not there 
      const cartId = generateRandomString();
      //const currentCartState = [...cartState, generateRandomString()]
      localStorage.setItem('cartId', cartId);
      let data = {cartId: cartId, productId: props.id, qty: 1}; //you get the item to add on to the Cart
      let cartItems = [data];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      //it means the cardId is there
      let id = localStorage.getItem("cartId");
      let cartItems = localStorage.getItem("cartItems");
      if(!cartItems){
        //we need to create a new one for the cart items
        let data = {cartId: id, productId: props.id, qty: 1}; //you get the item to add on to the Cart
        let cartItems = [data];
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      } else {
        //its already there we need to append it
        let temp = JSON.parse(localStorage.getItem("cartItems"));
        temp.push({cartId: id, productId: props.id, qty: 1}); //you get the item to add on to the Cart
        localStorage.setItem("cartItems", JSON.stringify(temp));
      }
    }
    let result = JSON.parse(localStorage.getItem("cartItems"));
    console.log("RD: ", result);
    console.log("cart item length: ", result.length)
    return result.length
  }
 
  return (
    <div >

        <Card className="cart-card" style={{ width: '100%' }}>
          <div className="cart-item">
            <img height="200px" src={props.image ? props.image : ""} alt={props.name}></img>
            <span className="cart-product-detail">
              <h3>{props.name}</h3>
              <p>{props.description}</p>
              
              <span>{props.isSoldOut? "Out of Stock" : "In Stock"}</span>
              <span className="cart-edit">
              <div>
                <Button onClick={() => addToCart(props.id)}>Add to Cart</Button>
              </div>
              <div>
                <Link to={'/details'} productDetailID={props}>
                  <Button onClick={() => console.log("props.id is: ", props.id)}>Details</Button>
                </Link>
               
                
              </div>
          
              </span>
            </span>
          </div>
        </Card>
      <br />
    
    </div>
  )
}

export default Product;































// import { Card, Col, Row, Menu, Button } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { useState } from 'react';


// function Product(props) {
  
//   const addToCart = (productId) => {
//     props.setCart((prev) => {
//       return [...prev, productId]
//     });
    
//   }
  
//   return (
//     <div >

//         <Card className="cart-card" style={{ width: '100%' }}>
//           <div className="cart-item">
//             <img height="200px" src={props.image ? props.image : ""} alt={props.name}></img>
//             <span className="cart-product-detail">
//               <h3>{props.name}</h3>
//               <p>{props.description}</p>
              
//               <span>{props.isSoldOut? "Out of Stock" : "In Stock"}</span>
//               <span className="cart-edit">
//               <div>
//                 <Button onClick={() => addToCart(props.id)}>Add to Cart</Button>
//               </div>
//               <div>
//                 <Link to={'/details'} productDetailID={props}>
//                   <Button onClick={() => console.log("props.id is: ", props.id)}>Details</Button>
//                 </Link>
               
                
//               </div>
          
//               </span>
//             </span>
//           </div>
//         </Card>
//       <br />
    
//     </div>
//   )
// }

// export default Product;
