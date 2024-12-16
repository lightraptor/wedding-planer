import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ContactPage,
  HomePage,
  ServicePage,
  SustainabilityPage,
  WeddingPage,
} from "../page";
import { ROUTES, SERVICES } from "../defines";
import { Layout } from "../components";
import { EventDesPage } from "../page/eventDes";

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
    {
      path: ROUTES.Contact.path,
      element: (
        <Layout>
          <ContactPage />
        </Layout>
      ),
    },
    {
      path: ROUTES.Service.path,
      element: (
        <Layout>
          <ServicePage />
        </Layout>
      ),
    },
    {
      path: SERVICES.FeatureWeddingsAndSpecialEvents.path,
      element: (
        <Layout>
          <WeddingPage />
        </Layout>
      ),
    },
    {
      path: SERVICES.EventAndDesignProduction.path,
      element: (
        <Layout>
          <EventDesPage />
        </Layout>
      ),
    },
    {
      path: SERVICES.Sustainability.path,
      element: (
        <Layout>
          <SustainabilityPage />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
