import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Button, Container } from "@mui/material";
import Appbar from "./components/Appbar/Appbar";
import AppbarDesktop from "./components/Appbar/AppbarDesktop";
import Banner from "./components/Banner/Banner";
import Products from "./page/Products";
import Categories from "./page/Categories";
import Home from "./page/Home";
import MyLayout from "./components/myLayout/MyLayout";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MyLayout>
        <Outlet />
      </MyLayout>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/products/:id", element: <Products /> },
      { path: "/categories", element: <Categories /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/ContactUs", element: <ContactUs/> },
    ],
  },
]);

function App() {

  return <RouterProvider router={router} />;
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
