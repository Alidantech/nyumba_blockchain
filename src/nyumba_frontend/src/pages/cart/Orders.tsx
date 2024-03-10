import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import NavLink from "@mui/joy/Link";
import {Link} from 'react-router-dom';
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import OrderTable from "./widgets/order/OrderTable";
import OrderList from "./widgets/order/OrderList";

export default function OrdersPage() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: { xs: 2, sm: 2, md: 3 },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        height: "100dvh",
        gap: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/dashboard/home">
            <NavLink underline="none" color="neutral" aria-label="Home">
              <HomeRoundedIcon />
            </NavLink>
          </Link>
          <Link to="/dashboard/home">
            <NavLink
              underline="hover"
              color="neutral"
              fontSize={12}
              fontWeight={500}
            >
              Dashboard
            </NavLink>
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Orders
          </Typography>
        </Breadcrumbs>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Orders
        </Typography>
        <Button
          color="primary"
          startDecorator={<DownloadRoundedIcon />}
          size="sm"
        >
          Download PDF
        </Button>
      </Box>
      <OrderTable />
      <OrderList />
    </Box>
  );
}
