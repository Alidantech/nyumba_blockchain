import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/home/Landing";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/home/Dashboard";
import ProtectedRoute from "./protected.routes";
import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import RentalDashboard from "../pages/shop/Rental";

const router = createBrowserRouter([
  //public routes
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },

  //protected routes
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <HomePage />,
      },
      {
        path: "/dashboard/orders",
        element: <OrdersPage />,
      },
      {
        path: "/dashboard/chat",
        element: <ChatsPage />,
      },
      {
        path: "/dashboard/profile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/profile",
        element: <MyProfile />,
      },
    ],
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/rentals",
    element: <RentalDashboard />,
  },
]);

export default router;

// {
//   element: <ProtectedRoute />,
//   children: [
//     {
//       path: "/profile",
//       element: <Profile />,
//     },
//     {
//       path: "/editprofile",
//       element: <EditProfile />,
//     },
//   ],
// },
// {
//   element: <ProtectedRoute  />,
//   children: [
//     {
//       path: "/admin",
//       element: <Admin />,
//     },
//   ],
// },
