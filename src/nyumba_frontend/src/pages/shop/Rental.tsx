import * as React from "react";
import {} from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";
import RentalCard from "./widgets/RentalCard";
import HeaderSection from "./widgets/HeaderSection";
import Search from "./widgets/Search";
import Filters from "./widgets/Filters";
import Pagination from "./widgets/Pagination";
import rentalData from '../../database/Rental';

export default function Rental() {
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
            title="Rentals and Properties"
            subTitle="Browse through our rental listings for homes, apartments, and commercial spaces for a comfortable living or business setup."
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
          {rentalData.map((data, index) => (
            <RentalCard key={index} {...data} />
          ))}
        </Stack>
      </Stack>
      <Pagination />
    </Box>
  );
}

{
  /* 
}
{
  /* <Box
          sx={{
            gridRow: "span 3",
            display: { xs: "none", md: "flex" },
            backgroundColor: "background.level1",
            backgroundSize: "cover",
            backgroundImage:
              'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3731&q=80")',
          }}
        /> */
}
{
  /* */
}
{
  /*  */
}
