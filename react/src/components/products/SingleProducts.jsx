import { Product, ProductImage } from "../../styles/products";

function SingleProducts({ product, matches }) {
  return (
    <Product>
      <ProductImage src={product.image} />
    </Product>
  );
}

export default SingleProducts;
