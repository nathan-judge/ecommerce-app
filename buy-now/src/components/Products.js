import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
const products = [
  { id: 1, name: 'Coding with JavaScript For Dummies', price: 35.63, quantity: 42, thumbnail_photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71PnU2pTHLL.jpg', description: 'Go from beginner to builder quickly with this hands-on JavaScript guide', category: 'Books' },
  { id: 2, name: 'MacBook', price: 2000, quantity: 42, thumbnail_photo_url: 'https://images.macrumors.com/article-new/2013/09/m1-macbook-air-design.jpg', description: 'Expensive Student Laptop', category: 'Computer' }

];
function Products({ products }) {
    
  return (
    <div className="Products" >
      <h1>My Products</h1>

      {products.map((product) => {
        return (
          <div>
            <Product
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
         
            />
          </div>
        )
      })}

      <h3>Subtotal(2 items):total $$</h3>
    </div>
  );
}


export default Products;