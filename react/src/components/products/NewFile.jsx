import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  Container,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {
  Product,
  ProductImage,
  ProductPrice,
  ProductText,
  ProductTitle,
} from "../../styles/products";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MediaCard({ text, img, price, title, id, matches }) {
  const navigate = useNavigate();

  return (
    <Container
      style={{
        p: "20px",
        marginBottom: "40px",
      }}
      onClick={() => navigate(`/products/${id}`)}
    >
      <Product>
        <ProductImage src={img} />
        <CardContent>
          <ProductTitle>{title}</ProductTitle>
          <ProductText>{text}</ProductText>
          <ProductPrice> {`€ ${price} `}</ProductPrice>
        </CardContent>
        <CardActions>
          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches ? theme.palette.primary.main : undefined,
              }}
            >
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
        </CardActions>
      </Product>
    </Container>
  );
}
