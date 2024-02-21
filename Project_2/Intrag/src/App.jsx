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
      { path: "*", element: <div>404</div> },
      // { path: true, element: <div>Home</div> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <MyLayout>
        <Outlet />
      </MyLayout>
    </RouterProvider>
  );
}

export default App;
