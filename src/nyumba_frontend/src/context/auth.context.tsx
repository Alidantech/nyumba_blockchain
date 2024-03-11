import { createContext, PropsWithChildren, useContext, useState } from "react";

export type User = {
  id: number;
  role: string;
};

// Define a type for the context value including functions
type AuthContextValue =
  | (User & {
      setAuthStatus: (isSignedIn: boolean) => void;
      setUserRole: (role: User["role"]) => void;
      clearAuthStatus: () => void;
    })
  | null;

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(
    isSignedIn ? { id: 1, role: "govt" } : null
  );

  const setAuthStatus = (isSignedIn: boolean) => {
    if (isSignedIn) {
      setUser({ id: 1, role: "govt" });
    } else {
      setUser(null);
    }
  };

  const setUserRole = (role: User["role"]) => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  const clearAuthStatus = () => {
    setUser(null);
  };

  const contextValue: AuthContextValue = {
    ...(user || {}),
    setAuthStatus,
    setUserRole,
    clearAuthStatus,
    id: user?.id || 0,
    role: user?.role || "none",
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
