import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
import Cart from "../pages/cart/Cart";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import Land from "../pages/shop/Land";
import RealEstate from "../pages/shop/RealEstate";
import LeaseLand from "../pages/shop/LeaseLand";
import Rental from "../pages/shop/Rental";
import { RouteObject } from "react-router-dom";

export const getGovtRoutes: () => RouteObject[][] = () => [
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

    path: "/dashboard/profile",
    element: <MyProfile />,
  },
];

// Now you can use getGovtRoutes wherever RouteObject[][] is expected
export const govtRoutes: RouteObject[][] = getGovtRoutes();

export default govtRoutes;