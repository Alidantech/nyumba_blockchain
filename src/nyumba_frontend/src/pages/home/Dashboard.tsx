import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Header from "../../common/widgets/Header";
import Sidebar from "../../common/widgets/Sidebar";
import { Outlet } from "react-router-dom";
import theme from "../../theme/DashboardTheme";
import { Link, useParams } from "react-router-dom";

export default function Dashboard() {

  const currentPage = useParams();

  console.log("Current Page:", currentPage);

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Sidebar currentPage={"currentPage"} />
        <Header />
        <Box component="main" className="MainContent">
          {/* Render all dashboard pages here */}
          <Outlet />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
