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
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import products from "../../slices/products";

export default function MediaCard({ text, img, price, title }) {
  // const { id } = useParams();
  // const [modalIsOpen, setModalIsOpen] = useState(id);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  return (
    <Container style={{ p: "20px", marginBottom: "40px" }}>
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
        </CardActions>
      </Product>
    </Container>
  );
}
