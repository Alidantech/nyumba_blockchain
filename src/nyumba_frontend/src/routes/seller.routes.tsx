import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
import Cart from "../pages/cart/Cart";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import Land from "../pages/shop/Land";
import RealEstate from "../pages/shop/RealEstate";
import LeaseLand from "../pages/shop/LeaseLand";
import Rental from "../pages/shop/Rental";
import { RouteProps } from "react-router-dom";

export type RouteObject = RouteProps & {
  element: React.ReactNode;
};

export const getSellerRoutes: () => RouteObject[][] = () => [
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
];

// Now you can use getSellerRoutes wherever RouteObject[][] is expected
export const sellerRoutes: RouteObject[][] = getSellerRoutes();

export default sellerRoutes;
