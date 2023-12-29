import { Container } from "@mui/material";
import Appbar from "../Appbar/Appbar";
import Banner from "../Banner/Banner";
import { useLocation, useNavigate } from "react-router-dom";

function MyLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isCategoriesPage = location.pathname === paths.landing;
  const isProductsPage = location.pathname === paths.group;

  return (
    <Container maxWidth="xl">
      <Appbar />
      {children}
    </Container>
  );
}

export default MyLayout;
