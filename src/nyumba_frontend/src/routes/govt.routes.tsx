import HomePage from "../pages/home/Home";
import Requests from "../pages/services/CountyGovt"
import Chat from "../pages/chat/Chat"
import { RouteObject } from "react-router-dom";

export const getGovtRoutes: () => RouteObject[][] = () => [
  {
    //@ts-ignore

    path: "/home",
    element: <Requests />,
  },
   {
    //@ts-ignore
    path: "/documents/requests",
    element: <Requests />,
  },
   {
    //@ts-ignore
    path: "/documents/accepted",
    element: <Requests />,
  },
   {
    //@ts-ignore
    path: "/chat",
    element: <HomePage />,
  },
  
];

// Now you can use getGovtRoutes wherever RouteObject[][] is expected
export const govtRoutes: RouteObject[][] = getGovtRoutes();

export default govtRoutes;