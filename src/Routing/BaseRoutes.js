import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PortfolioPage from "../Components/PortfolioPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPage />,
  },
]);

export default function BrowserRoutes() {
  return <RouterProvider router={router} />;
}
