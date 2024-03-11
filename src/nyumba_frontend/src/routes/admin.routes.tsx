import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import { RouteObject } from "react-router-dom";
import Land from "../pages/shop/Land";
import RealEstate from "../pages/shop/RealEstate";
import LeaseLand from "../pages/shop/LeaseLand";
import Rental from "../pages/shop/Rental";
import Profile from "../pages/auth/Profile";


const getAdminRoutes: () => RouteObject[][] = () => [
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
    path: "/profile",
    element: <Profile />,
  },
];

// Now you can use getadmin wherever RouteObject[][] is expected
export const adminRoutes: RouteObject[][] = getAdminRoutes();

export default adminRoutes;
