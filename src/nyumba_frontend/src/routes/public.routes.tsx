import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
//@ts-ignore
import LandingPage from "../pages/home/Landing.jsx";
//@ts-ignore
import SignIn from "../pages/auth/SignIn.jsx";
//@ts-ignore
import SignUp from "../pages/auth/SignUp.jsx";
import ProtectedRoute from "./protected.routes";
import { buyerRoutes } from "./buyer.routes";
import { sellerRoutes } from "./seller.routes";
import { adminRoutes } from "./admin.routes";
import { govtRoutes } from "./govt.routes";
import NotFoundPage from "../pages/home/_404";
import ErrorPage from "../pages/home/error";
import Root from "../pages/Root";

const router = createBrowserRouter([
  //public routes
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

      // protected routes
      {
        path: "/dashboard",
        element: <ProtectedRoute role="buyer" />, //@ts-ignore
        children: buyerRoutes,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute role="seller" />, //@ts-ignore
        children: sellerRoutes,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute role="admin" />, //@ts-ignore
        children: adminRoutes,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute role="govt" />, //@ts-ignore
        children: govtRoutes,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
