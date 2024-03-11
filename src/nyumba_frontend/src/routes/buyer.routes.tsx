import React from "react";
import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
//@ts-ignore
import CheckoutPage from "../pages/cart/Checkout.jsx";
import Cart from "../pages/cart/Cart";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import Land from "../pages/shop/Land";
import RealEstate from "../pages/shop/RealEstate";
import LeaseLand from "../pages/shop/LeaseLand";
import Rental from "../pages/shop/Rental";
import { RouteObject } from "react-router-dom";
import Profile from "../pages/auth/Profile";

// Define the function that returns RouteObject[][]
export const getBuyerRoutes: () => RouteObject[][] = () => [
  {
    //@ts-ignore
    path: "/home",
    element: <HomePage />,
  },
  {
    //@ts-ignore

    path: "/orders",
    element: <OrdersPage />,
  },
  {
    //@ts-ignore

    path: "/chat",
    element: <ChatsPage />,
  },
  {
    //@ts-ignore

    path: "/profile",
    element: <MyProfile />,
  },
  {
    //@ts-ignore

    path: "/properties/rental",
    element: <Rental />,
  },
  {
    //@ts-ignore

    path: "/properties/real-estate",
    element: <RealEstate />,
  },
  {
    //@ts-ignore

    path: "/properties/land",
    element: <Land />,
  },
  {
    //@ts-ignore

    path: "/properties/lease-land",
    element: <LeaseLand />,
  },
  {
    //@ts-ignore

    path: "/cart",
    element: <Cart />,
  },
  {
    //@ts-ignore
    path: "/cart/checkout",
    element: <CheckoutPage />,
  },
  {
    //@ts-ignore
    path: "/cart/checkout",
    element: <Profile />,
  },
];

// Now you can use getBuyerRoutes wherever RouteObject[][] is expected
export const buyerRoutes: RouteObject[][] = getBuyerRoutes();

export default buyerRoutes;
