import { Container } from "@mui/material";
import Appbar from "../Appbar/Appbar";

function MyLayout({ children }) {
  return (
    <Container maxWidth="xl">
      <Appbar />
      {children}
    </Container>
  );
}

export default MyLayout;
