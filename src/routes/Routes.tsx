import { createBrowserRouter } from "react-router";
import homeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: homeLayout,
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
