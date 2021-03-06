import React from "react";
import AdminProductListItem from "./AdminProductListItem";

function AdminProductList(props) {
  return (
    <main>
      <div className="admin-list">
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
              fetchCart={props.fetchCart}
            />
          );
        })}
      </div>
    </main>
  );
}
export default AdminProductList;
