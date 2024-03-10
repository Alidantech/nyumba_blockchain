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

// Define the function that returns RouteObject[][]
export const getBuyerRoutes: () => RouteObject[][] = () => [
  {
    //@ts-ignore
    path: "/dashboard/home",
    element: <HomePage />,
  },
  {
    //@ts-ignore

    path: "/dashboard/orders",
    element: <OrdersPage />,
  },
  {
    //@ts-ignore

    path: "/dashboard/chat",
    element: <ChatsPage />,
  },
  {
    //@ts-ignore

    path: "/dashboard/profile",
    element: <MyProfile />,
  },
  {
    //@ts-ignore

    path: "/dashboard/properties/rental",
    element: <Rental />,
  },
  {
    //@ts-ignore

    path: "/dashboard/properties/real-estate",
    element: <RealEstate />,
  },
  {
    //@ts-ignore

    path: "/dashboard/properties/land",
    element: <Land />,
  },
  {
    //@ts-ignore

    path: "/dashboard/properties/lease-land",
    element: <LeaseLand />,
  },
  {
    //@ts-ignore

    path: "/dashboard/cart",
    element: <Cart />,
  },
  {
    //@ts-ignore

    path: "/dashboard/cart/checkout",
    element: <CheckoutPage />,
  },
];

// Now you can use getBuyerRoutes wherever RouteObject[][] is expected
export const buyerRoutes: RouteObject[][] = getBuyerRoutes();

export default buyerRoutes;
