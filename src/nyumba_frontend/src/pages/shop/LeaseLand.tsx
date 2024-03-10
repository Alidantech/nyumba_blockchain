import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import leaseLandData from "../../database/LeaseLand";
import RentalCard from "./widgets/RentalCard";
import HeaderSection from "./widgets/HeaderSection";
import Search from "./widgets/Search";
import Filters from "./widgets/Filters";
import Pagination from "./widgets/Pagination";

export default function LeaseLand() {
  return (
    <Box
      component="main"
      sx={{
        height: "100dvh",
        width: "100%",
        display: "grid",
        overflow: "hidden",
        // gridTemplateColumns: { xs: "auto", md: "60% 40%" },
        // gridTemplateRows: "auto 1fr auto",
      }}
    >
      {" "}
      <Stack
        spacing={2}
        sx={{
          px: { xs: 0, md: 0 },
          pt: { md: 0, xs: 5 },
          minHeight: 0,
          overflow: { md: "hidden", xs: "auto" },
        }}
      >
        <Stack
          sx={{
            backgroundColor: "background.surface",
            px: { xs: 2, md: 4 },
            pb: 1,
            // borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <HeaderSection
            title="Lease Land Options"
            subTitle="Find the perfect land for lease to meet your business or personal needs, flexible terms available."
          />
          <Stack
            sx={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
              alignItems: { sm: "center", xs: "stretch" },
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Search />
            <Filters />
          </Stack>
        </Stack>
        <Stack
          style={{ margin: "0" }}
          sx={{
            height: "100%",
            overflow: { md: "auto" },
            m: 0,
            p: 2,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: 2,
          }}
        >
          {leaseLandData.map((data, index) => (
            <RentalCard key={index} {...data} />
          ))}
        </Stack>
      </Stack>
      <Pagination />
    </Box>
  );
}
