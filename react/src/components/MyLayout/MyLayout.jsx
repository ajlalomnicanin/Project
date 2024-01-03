import { Container } from "@mui/material";
import Appbar from "../Appbar/Appbar";
import { useLocation, useNavigate } from "react-router-dom";

function MyLayout({ children }) {

  return (
    <Container maxWidth="xl">
      <Appbar />
      {children}
    </Container>
  );
}

export default MyLayout;
