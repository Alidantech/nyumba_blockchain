import * as React from "react";
import Box from "@mui/joy/Box";
import Layout from "./widgets/home/Layout";
import TableFiles, { MobileTableFiles } from "./widgets/home/Tables";
import MoreInfo from "./widgets/home/MoreInfo";
import RecentItems from "./widgets/home/RecentItems";
import Sheet from "@mui/joy/Sheet";

export default function FilesExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <Layout.Root>
      <Box sx={{ m: 0, p: 0, w: 0, h: 0 }}></Box>
      <Layout.Main>
        <Box
          sx={{
            m: 0,
            p: 0,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 2,
          }}
        >
          {" "}
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: "sm",
              gridColumn: "1/-1",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <TableFiles />
          </Sheet>
          <MobileTableFiles />
          {/* <Stack>Recently Viewed</Stack> */}
          <RecentItems />
        </Box>
      </Layout.Main>
      <MoreInfo />
    </Layout.Root>
  );
}
