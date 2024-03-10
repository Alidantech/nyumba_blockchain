import HomePage from "../pages/home/Home";
import OrdersPage from "../pages/cart/Orders";
import ChatsPage from "../pages/chat/Chat";
import MyProfile from "../pages/auth/Profile";
import { RouteObject } from "react-router-dom";

const getAdminRoutes: () => RouteObject[][] = () => [
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

    path: "/dashboard/profile",
    element: <MyProfile />,
  },
];

// Now you can use getadmin wherever RouteObject[][] is expected
export const adminRoutes: RouteObject[][] = getAdminRoutes();

export default adminRoutes;
