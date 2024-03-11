import React from "react";
import { Navigate, useOutletContext, Outlet } from "react-router-dom";
import Dashboard from "../pages/home/Dashboard";

const ProtectedRoute = ({ role }: { role: string }) => {
  const context: any = useOutletContext();

  if (!context.user || !context.user?.role) {
    return <Navigate to="/signin" replace />;
  }
  switch (role) {
    case "buyer":
      return <Dashboard children={<Outlet context={context} />} />;
    case "seller":
      return <Dashboard children={<Outlet context={context} />} />;
    case "admin":
      return <Dashboard children={<Outlet context={context} />} />;
    case "govt":
      return <Dashboard children={<Outlet context={context} />} />;
    default:
      return [];
  }
};

export default ProtectedRoute;
