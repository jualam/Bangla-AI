import { createBrowserRouter } from "react-router-dom";
import Client from "../Layout/Client";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AboutPage from "../Pages/About_Contact_Page/AboutPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ContactPage from "../Pages/About_Contact_Page/ContactPage";
import OurTeamPage from "../Pages/OurTeamPage/OurTeamPage";
import TranslatePage from "../Pages/TranslatePage/TranslatePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/translate",
        element: <TranslatePage />,
      },
      {
        path: "/our-team",
        element: <OurTeamPage />,
      },
    ],
  },
]);
