import React, { useEffect, useState } from "react";
import { eCommerceApi } from "../../api";
import MediaCard from "./NewFile";
import { Container, Grid } from "@mui/material";

const Products = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await eCommerceApi.get("/api/products?populate=*");
        setProduct(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <div>
      <Container>
        <Grid container spacing={4}>
          {product &&
            product.map((item) => (
              <Grid item key={item.id} sx={12} sm={8} md={6}>
                <MediaCard
                  title={item.attributes.title}
                  text={item.attributes.description}
                  price={item.attributes.price}
                  img={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
