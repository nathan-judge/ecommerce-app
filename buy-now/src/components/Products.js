import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

function Products({ products, onAddCart }) {
   
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
              inventory_left={product.inventory.available}
              onAddCart={onAddCart}
            />
          </div>
        )
      })}

   
    </div>
  );
}


export default Products;