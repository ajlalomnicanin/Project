import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import { fetchProduct } from "../slices/products";
import MediaCard from "../components/products/NewFile";

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
    <Container>
      <Grid container spacing={4}>
        <Grid item key={productState.id} sx={12} sm={8} md={6}>
          <MediaCard
            // onClick={() => productState.id}
            id={productState.id}
            title={productState?.product?.data?.attributes?.title}
            text={productState?.product?.data?.attributes.description}
            price={productState?.product?.data?.attributes?.price}
            img={`http://localhost:1337${productState?.product?.data?.attributes.image.data.attributes.url}`}
          />
        </Grid>
      </Grid>
    </Container>

    // <div>
    //   <div key={productState.id}>
    //     <p>Ime: {productState?.product?.data?.attributes?.title}</p>
    //     <p>Cena: {productState?.product?.data?.attributes?.price}</p>
    //     <p>
    //       Opis proizvoda: {productState?.product?.data?.attributes?.description}
    //     </p>
    //     <Button variant="contained" color="secondary">
    //       Add to card
    //     </Button>
    //   </div>
    // </div>
  );
};

export default Products;
