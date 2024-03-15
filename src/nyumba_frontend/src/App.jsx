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
import "./common/widgets/scrollbar.css";
import NotFoundPage from "./pages/home/_404";
import ErrorPage from "./pages/home/error";
import Root from "./pages/Root";
import { useAuth } from "./context/auth.context";
import { nyumba_backend } from "declarations/nyumba_backend";

function App() {
  const { role } = useAuth();
  const [protectedRoutes, setProtectedRoutes] = useState([]);
  // Function to create a normal user
  async function createNormalUser() {
    // Parameters for creating a normal user
    const user = {
      user_data: {
        user_type: { NormalUser: null },
        photo_url: "", // Add photo URL here
        password: "your_password", // Add password here
        name: "John Doe", // Add user's name here
        email: "jane@example.com", // Add user's email here
        gender: { Male: null }, // Add user's gender here
        birth_date: "1990-01-01", // Add user's birth date here
      },
      normal_user_role: { Seller: null }, // Assign a role to the user
      verification_documents: [], // Add any verification documents if required
    };

    try {
      // Calling the create_normal_user method
      const createdUser = await nyumba_backend.create_normal_user(
        user.user_data,
        user.normal_user_role,
        user.verification_documents
      );

      const logedUser = await nyumba_backend.login(
        "jane@example.com",
        "your_password"
      );

      console.log(logedUser);

      // Storing the returned user object in a variable
      // const newUser = createdUser;

      // Logging the user object to the console
      // console.log("New User:", newUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  // Calling the function to create a normal user
  createNormalUser();

  useEffect(() => {
    // console.log("new user role:", role);
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
