import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Header from "../../common/widgets/Header";
import Sidebar from "../../common/widgets/Sidebar";
import theme from "../../theme/DashboardTheme";
import {  useLocation } from "react-router-dom";
import {
  buyerNavigationData,
  sellerNavigationData,
  adminNavigationData,
  govtAgentNavigationData,
} from "../../common/utils/navData";
import { NavigationData } from "../../types/NavItem";
import { useOutletContext } from "react-router-dom";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const context = useOutletContext() as any;

  const role = context.user?.role;

  const currentPath = location.pathname.split("/").pop() || "dashboard";

  document.title = "Nyumba - " + currentPath.toLocaleLowerCase();

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
      <Box
        sx={{
          display: "flex",
          flex: 1,
          height: "100vh",
          m: 0,
          p: 0,
        }}
      >
        <Sidebar currentPage={currentPath} navigationData={navigationData} />
        <Header />
        {/* Render all dashboard pages here */}
        {children}
      </Box>
    </CssVarsProvider>
  );
}
