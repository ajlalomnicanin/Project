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
import { UIProvider } from "./context/ui";
import SearchPage from "./page/Searchpage";
//useParams

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
      { path: "/Products/:id", element: <Products /> },
      { path: "/categories", element: <Categories /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/ContactUs", element: <ContactUs /> },
      { path: "/Search/:q", element: <SearchPage /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
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
