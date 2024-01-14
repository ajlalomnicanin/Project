// import { useToken } from "../theme/Theme";
import Promotions from "../components/promotions";
import Products from "../components/products/index";
import Banner from "../components/banner/Banner";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// const { useToken } = theme;
import React, { useEffect } from "react";
import { fetchProducts } from "../slices/products";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error fetching products: {status.error}</div>;
  }
  return (
    <>
      <Banner />
      <Promotions />
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h4">Our Products</Typography>
        <ul>
          {" "}
          {products.map((product) => (
            <li key={product.id}>{product.attributes.title}</li>
          ))}
        </ul>
      </Box>
      <Products />
      <h1>he</h1>
    </>
  );
}

export default Home;
