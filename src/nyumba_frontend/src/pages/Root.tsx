import { useState } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [user, setUser] = useState<{
    id: number | null;
    username: string;
    role: string;
  } | null>(null);

  
  const logoutUser = () => {
    setUser(null);
  };

  return (
    <>
      <Outlet context={{ user, setUser, logoutUser }} />
    </>
  );
};

export default Root;
