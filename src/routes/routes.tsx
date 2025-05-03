import { createBrowserRouter, Navigate } from "react-router";
import homeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: homeLayout,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" replace />,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: "authentication page",
  },
  {
    path: "/news",
    element: "news page",
  },
  {
    path: "/*",
    element: "error page",
  },
]);

export default router;
