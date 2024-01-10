import { useTheme } from "@mui/material/styles";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { products1 } from "./api";
import SingleProducts from "./SingleProducts";

function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products1?.map((product) => {
    return (
      <Grid
        item
        key={product.id}
        // xs={2}
        // sm={4}
        md={4}
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
      >
        <SingleProducts product={product} matches={matches} />
      </Grid>
    );
  });
  console.log(renderProducts);
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        justifyContent={"center"}
        sx={{ margin: "20px 4px 10px 4px" }}
        columns={{ sx: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}

export default Products;
