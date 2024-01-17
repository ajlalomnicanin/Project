import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { fetchProduct } from "../slices/products";

const Products = () => {
  const data = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);

  console.log(productState);

  useEffect(() => {
    dispatch(fetchProduct(data.id));
  }, []);

  if (!productState) {
    return null;
  }

  return (
    <div>
      <div key={productState.id}>
        <p>Ime: {productState?.product?.data?.attributes?.title}</p>
        <p>Cena: {productState?.product?.data?.attributes?.price}</p>
        <p>
          Opis proizvoda: {productState?.product?.data?.attributes?.description}
        </p>
        <Button variant="contained" color="secondary">
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default Products;
