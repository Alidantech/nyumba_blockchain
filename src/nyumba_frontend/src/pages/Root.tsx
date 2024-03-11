import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Root = () => {
  const { setAuthStatus, setUserRole } = useAuth();

  const [user, setUser] = useState<{
    id: number | null;
    username: string;
    role: string;
  } | null>(null);

  const loginUser = (user: { id: number; username: string; role: string }) => {
    setUser(user);
    setAuthStatus(true);
    setUserRole(user.role);

    return true;
  };

  const logoutUser = () => {
    setUser(null);
    setAuthStatus(false);
    setUserRole("none");
  };

  return (
    <>
      <Outlet context={{ user, loginUser, logoutUser }} />
    </>
  );
};

export default Root;
