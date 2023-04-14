import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages/home-page";
import { MainLayout } from "../layouts/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
