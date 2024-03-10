import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import RentalCard from "./widgets/RentalCard";
import HeaderSection from "./widgets/HeaderSection";
import Search from "./widgets/Search";
import Filters from "./widgets/Filters";
import Pagination from "./widgets/Pagination";
import realEstateData from "../../database/RealEstate";

export default function RealEstate() {
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
            title="Real Estate Listings"
            subTitle="Discover stunning real estate properties with our curated listings and expert insights."
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
          {realEstateData.map((data, index) => (
            <RentalCard key={index} {...data} />
          ))}
        </Stack>
      </Stack>
      <Pagination />
    </Box>
  );
}
