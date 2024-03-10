/* Your Header component content */
import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import ColorSchemeToggle from "../../pages/chat/widgets/ColorSchemeToggle";
import { toggleSidebar } from "../utils/utils";
import { Box, Input, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Sheet
      sx={{
        display: { xs: "flex", md: "none" },
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "var(--Header-height)",
        zIndex: 0,
        backgroundColor: "transparent",
        p: 2,
        gap: 1,
        borderBottom: "1px solid",
        // borderColor: "background.level1",
        boxShadow: "none",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "0px",
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <MenuIcon />
      </IconButton>
      <Link to="/">
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          Nyumba Blockchain
        </Box>
      </Link>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>
    </Sheet>
  );
}
