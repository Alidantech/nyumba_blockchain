import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/home/Landing";
import SignIn from "./pages/auth/SignIn";
import AdminSignIn from "./pages/auth/Admin";

import SignUp from "./pages/auth/SignUp";
import CheckoutPage from "./pages/cart/Checkout";
import ProtectedRoute from "./routes/protected.routes";
import { buyerRoutes } from "./routes/buyer.routes";
import { sellerRoutes } from "./routes/seller.routes";
import { adminRoutes } from "./routes/admin.routes";
import { govtRoutes } from "./routes/govt.routes";
import { loadingRoutes } from "./routes/waiting.routes";
import './common/widgets/scrollbar.css';
import NotFoundPage from "./pages/home/_404";
import ErrorPage from "./pages/home/error";
import Root from "./pages/Root";
import { useAuth } from "./context/auth.context";

function App() {
  const { role } = useAuth();
  const [protectedRoutes, setProtectedRoutes] = useState([]);

  console.log("user role:", role);

  useEffect(() => {
    console.log("new user role:", role);
    setProtectedRoutes(generateProtectedRoutes(role));
  }, [role]);

  const router = createBrowserRouter([
    // public routes
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
          path: "/admins/signin",
          element: <AdminSignIn />,
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
          path: "/",
          element: <ProtectedRoute role={role} />,
          children: protectedRoutes,
        },
        {
          path: "/cart/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

const generateProtectedRoutes = (role) => {
  switch (role) {
    case "buyer":
      return buyerRoutes;
    case "seller":
      return sellerRoutes;
    case "admin":
      return adminRoutes;
    case "govt":
      return govtRoutes;
    default:
      return loadingRoutes;
  }
};
