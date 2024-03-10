import React from "react";
import { Navigate, useOutletContext, Outlet } from "react-router-dom";
import Dashboard from "../pages/home/Dashboard";

const ProtectedRoute = ({ role }: { role: string }) => {
  const context: any = useOutletContext();
  console.log(context);
  if (!context.user || !context.user?.role) {
    return <Navigate to="/signin" replace />;
  }

  return <Dashboard children={<Outlet context={context} />} />;
};

export default ProtectedRoute;
