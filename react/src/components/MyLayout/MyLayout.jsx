import { Container } from "@mui/material";
import Appbar from "../Appbar/Appbar";
import Footer from "../footer/index";

function MyLayout({ children }) {
  return (
    <Container maxWidth="xl">
      <Appbar />
      {children}
      <Footer />
    </Container>
  );
}

export default MyLayout;
