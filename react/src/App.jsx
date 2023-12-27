import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Appbar from "./components/Appbar/Appbar";
import AppbarDesktop from "./components/Appbar/AppbarDesktop";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <AppbarDesktop />,
  //   },
  // ]);
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    // <RouterProvider router={router}>
    <Container maxWidth="xl">
      <Appbar />
    </Container>
    // </RouterProvider>
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
