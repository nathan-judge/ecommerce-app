import React from "react";
import ProductListItem from "./ProductListItem";

export default function ProductList(props) {
  const listProduct = props.products.map((product) => {
    return (
      <ProductListItem
        id={product.id}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
        image={product.thumbnail_photo_url}
        description={product.description}
        category={product.category}
      />
    );
  });

  return (
    <main>
      <h1 style={{ paddingTop: 100 }}>Products</h1>
      {listProduct}
    </main>
  );
}

// import React from "react";
// import ProductListItem from "./ProductListItem";
// import axios from 'axios'

// export default function ProductList (props) {

//   const listProduct = props.products.map((product) => {
//     return (

//       <ProductListItem id={product.id}
//                        name={product.name}
//                        price={product.price}
//                        quantity={product.quantity}
//                        image={product.thumbnail_photo_url}
//                        description={product.description}
//                        setCart={props.setCart}
//                        category={product.category} />
//     );
//   });

//   return (
//     <main>
//       <h1 style={{ paddingTop: 100 }}>Products</h1>
//       {listProduct}

//     </main>
//   );
// }
