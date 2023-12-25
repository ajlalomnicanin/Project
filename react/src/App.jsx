import { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import Appbar from "./components/Appbar";

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <Container maxWidth="xl">
      <Appbar />
      <Button>Button</Button>
    </Container>
  );
}

export default App;

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const response = await fetch("http://localhost:1337/api/products");
//       const data = await response.json();

//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getData();
// });
