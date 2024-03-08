import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Header from "../../common/widgets/Header";
import Sidebar from "../../common/widgets/Sidebar";
import { Outlet } from "react-router-dom";
import theme from "../../theme/DashboardTheme";
import { Link, useLocation } from "react-router-dom";
import {
  buyerNavigationData,
  sellerNavigationData,
  adminNavigationData,
  govtAgentNavigationData,
} from "../../common/utils/navData";
import { useAuth } from "../../context/auth.context";
import { NavigationData } from "../../types/NavItem";

export default function Dashboard() {
  const location = useLocation();
  const auth = useAuth(); // Access user information from the context
  const role = auth ? auth.role : null;
  const currentPath = location.pathname.split("/").pop() || "dashboard";

  // Determine the navigation data based on the user's role
  let navigationData: NavigationData;

  switch (role) {
    case "buyer":
      navigationData = buyerNavigationData;
      break;
    case "seller":
      navigationData = sellerNavigationData;
      break;
    case "admin":
      navigationData = adminNavigationData;
      break;
    case "govt":
      navigationData = govtAgentNavigationData;
      break;
    default:
      navigationData = []; // Default to an empty array for unknown roles
  }

  return (
    <CssVarsProvider theme={theme} disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", flex: 1 }}>
        <Sidebar currentPage={currentPath} navigationData={navigationData} />
        <Header />
        {/* Render all dashboard pages here */}
        <Outlet />
      </Box>
    </CssVarsProvider>
  );
}
