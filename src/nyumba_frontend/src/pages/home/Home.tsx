import * as React from "react";
import Box from "@mui/joy/Box";
import Layout from "./widgets/home/Layout";
import TableFiles, { MobileTableFiles } from "./widgets/home/Tables";
import MoreInfo from "./widgets/home/Notifications";
import RecentItems from "./widgets/home/RecentItems";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Breadcrumbs, Button } from "@mui/joy";
import { Link, NavLink, useOutletContext } from "react-router-dom";


export default function FilesExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const balance = Math.floor(Math.random() * 100) + 1;

   const context = useOutletContext() as any;

   const { logoutUser, user } = context;


  return (
    <Layout.Root>
      <Box
        sx={{
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          p: 2,
          display: "flex" ,
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          Welcome {user.role}
        </Typography>
        <Button
          color="primary"
        >
          Balance: {balance} tokens
        </Button>
      </Box>
      <Layout.Main>
        
        <Box
          sx={{
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
          }}
        >
          {" "}
          {/* <Sheet
            variant="outlined"
            sx={{
              borderRadius: "sm",
              gridColumn: "1/-1",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <TableFiles />
          </Sheet> */}
          {/* <MobileTableFiles /> */}
          {/* <Stack>Recently Viewed</Stack> */}
          <RecentItems />
        </Box>
      </Layout.Main>
      {/* <MoreInfo /> */}
    </Layout.Root>
  );
}
