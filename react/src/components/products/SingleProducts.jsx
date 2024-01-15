import { Stack } from "@mui/material";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,

  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ShareIcon from "@mui/icons-material/Share";

function SingleProducts({ product, matches }) {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isfav={1}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      {/* <ProductAddToCart variant="container">Add to card</ProductAddToCart> */}
    </>
  );
}

export default SingleProducts;
