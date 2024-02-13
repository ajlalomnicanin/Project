import MyLayout from "./MyLayout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";

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
      { path: "/about", element: <About /> },
      // { path: true, element: <div>Home</div> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      /* <h1>React Router DOM v6 Demo</h1> */
    </RouterProvider>
  );
}

export default App;
