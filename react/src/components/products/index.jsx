import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products } from "./api";
import { margin } from "polished";

function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => {
    <Grid
      item
      key={product.id}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
    ></Grid>;
  });
  return (
    <Container>
      <Grid
        container
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}

export default Products;
