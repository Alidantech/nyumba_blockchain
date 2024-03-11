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
import CircularProgressCountUp from '../common/widgets/Loading';


export const getLoadingRoutes: () => RouteObject[][] = () => [
  {
    //@ts-ignore

    path: "/home",
    element: <CircularProgressCountUp />,
  },
];

export const loadingRoutes: RouteObject[][] = getLoadingRoutes();

export default loadingRoutes;
