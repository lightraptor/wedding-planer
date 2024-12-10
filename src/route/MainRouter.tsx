import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../page";
import { ROUTES } from "../defines";
import { Layout } from "../components";

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.Home.path,
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
