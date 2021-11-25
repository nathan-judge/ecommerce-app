import { Card, Col, Row, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import Cart from "./Cart";
import { PropertySafetyFilled } from "@ant-design/icons";

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

  
const addToCart = async() => {
  
  const cartId = localStorage.getItem("cart_id");
  console.log('cartId :', cartId);
  
  const url = "/api/cart/2";
  const res = await axios.get(url);
  console.log("pppp", res.data);



}
  addToCart();
  // const addToCart = async () => {
  // // create a function that adds the product to the backend (cart).
  // const fetchCart = async () => {
  //   try {
  //     const cartId = localStorage.postItem("cart_id");
  //     const url = "/api/cart/" + cartId;
  //     const res = await axios.get(url);
            
  //     console.log("pppp", res.data);
  //     let newCart = res.data.cart;
  //     setCart(newCart);
  //     const cartCountAndTotal = helpers.cartSubtotal(newCart);
  //     setItemsCount(cartCountAndTotal.count);
  //     setSubtotal(cartCountAndTotal.amount);
  //   } catch (e) {
  //     console.log("Error fetching new cart", e);
  //   }
  // };

 
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


// So two things I want happen, Click the add to cart Button, that should add the product to the Cart
// As well as update the cart Icon.

// To approach this I think the best way is to add the product to the (axios.post) /cart page, and THEN in the cart page, 
// we can retrieve the amount of unique items in there and make the button in the "search bar" grab that data.

// I'm trying to implement local storage because I don't know how to do redux Properly... 

// Is it okay with what I have so far with my localStorage function? essentially it checks if there's an id , if there isn't
// set an id , as well as if there is a value associated with that id, if there isn't then create a value. etc.












  
// const addToCart = async (cartid) => {
//   let id = localStorage.getItem("cartId");
//   if(!id) {
//     //if the cart is not there 
//     const cartId = generateRandomString();
//     //const currentCartState = [...cartState, generateRandomString()]
//     localStorage.setItem('cartId', cartId);
//     let data = {cartId: cartId, productId: props.id, qty: 1}; //you get the item to add on to the Cart
//     let cartItems = [data];
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   } else {
//     //it means the cardId is there
//     let id = localStorage.getItem("cartId");
//     let cartItems = localStorage.getItem("cartItems");
//     if(!cartItems){
//       //we need to create a new one for the cart items
//       let data = {cartId: id, productId: props.id, qty: 1}; //you get the item to add on to the Cart
//       let cartItems = [data];
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     } else {
//       //its already there we need to append it
//       let temp = JSON.parse(localStorage.getItem("cartItems"));
//       temp.push({cartId: id, productId: props.id, qty: 1}); //you get the item to add on to the Cart
//       localStorage.setItem("cartItems", JSON.stringify(temp));
//     }
//   }
//   let result = JSON.parse(localStorage.getItem("cartItems"));
//   console.log("RD: ", result);
//   console.log("cart item length: ", result.length)
//   return result.length
// }


















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
