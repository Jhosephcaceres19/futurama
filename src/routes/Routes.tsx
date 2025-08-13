import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "../page/Dashboard";

export const Routes = () => {
  const routesForPublic = [
    {
      path: "/",
      element: <Dashboard />,
    },
  ];
  const router = createBrowserRouter([...routesForPublic]);
  return <RouterProvider router={router} />;
};
