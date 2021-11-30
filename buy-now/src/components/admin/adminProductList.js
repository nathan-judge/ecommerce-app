
import React from "react";
import AdminProductListItem from "./AdminProductListItem";

function AdminProductList(props) {
  console.log("props :", props);

  return (
    <main>
      <div style={{paddingTop: 0}} className="list">
        {props.products.map((product, key) => {
          return (
            <AdminProductListItem
              key={key}
              id={product.id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              image={product.thumbnail_photo_url}
              description={product.description}
              category={product.category}
              product={product}
              fetchProducts={props.fetchProducts}
            />
          );
        })}
      </div>
    </main>
  );
}
export default AdminProductList;
