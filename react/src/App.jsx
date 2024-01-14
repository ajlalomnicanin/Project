import { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Products from "./page/Products";
import Categories from "./page/Categories";
import Home from "./page/Home";
import MyLayout from "./components/myLayout/MyLayout";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import store from "./store";

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
      { path: "/ContactUs", element: <ContactUs /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
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
