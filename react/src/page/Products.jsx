// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Button } from "@mui/material";

// import { fetchProducts } from "../slices/products";

// export const Products = () => {
//   const data = useParams();
//   const dispatch = useDispatch();
//   const productsState = useSelector((state) => state.products);
//   console.log(productsState);

//   const status = useSelector((state) => state.ecommerce.status);
//   const error = useSelector((state) => state.ecommerce.error);

//   useEffect(() => {
//     dispatch(fetchProducts(data.id));
//   }, []);

//   return (
//     <div>
//       <div key={productsState.id}>
//         <img
//           className="slikaproizvoda slikaproizvoda1"
//           src={getImageUrl(
//             productsState?.product?.data?.attributes?.image.data.attributes.url
//           )}
//           alt=""
//         />
//         <p>Ime: {productsState?.product?.data?.attributes?.title}</p>
//         <p>Cena: {productsState?.product?.data?.attributes?.price}</p>
//         <p>
//           Opis proizvoda:{" "}
//           {productsState?.product?.data?.attributes?.description}
//         </p>
//         <Button variant="contained" color="secondary">
//           Add to card
//         </Button>
//       </div>
//     </div>
//   );
// };

import React from "react";

function Products() {
  return (
    <div>
      <p>helo</p>
    </div>
  );
}

export default Products;
