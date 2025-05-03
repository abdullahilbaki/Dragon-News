import { createBrowserRouter } from "react-router";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
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
