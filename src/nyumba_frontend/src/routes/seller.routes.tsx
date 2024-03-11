import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
import Cart from "../pages/cart/Cart";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import Land from "../pages/vendor/Land";
import RealEstate from "../pages/vendor/RealEstate";
import LeaseLand from "../pages/vendor/LeaseLand";
import Rental from "../pages/vendor/Rental";
import { RouteProps } from "react-router-dom";

export type RouteObject = RouteProps & {
  element: React.ReactNode;
};

export const getSellerRoutes: () => RouteObject[][] = () => [
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
    path: "/properties/my-rental",
    element: <Rental />,
  },
  {
    //@ts-ignore
    path: "/properties/my-land",
    element: <Land />,
  },
  {
    //@ts-ignore
    path: "/properties/my-real-estate",
    element: <RealEstate />,
  },
  {
    //@ts-ignore
    path: "/properties/my-lease-land",
    element: <LeaseLand />,
  },
];

// Now you can use getSellerRoutes wherever RouteObject[][] is expected
export const sellerRoutes: RouteObject[][] = getSellerRoutes();

export default sellerRoutes;
