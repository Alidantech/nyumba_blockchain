/* Your Sidebar component content */
import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Sheet from "@mui/joy/Sheet";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BrightnessAutoRoundedIcon from "@mui/icons-material/BrightnessAutoRounded";
import ColorSchemeToggle from "../../pages/chat/widgets/ColorSchemeToggle";
import { closeSidebar } from "../utils/utils";
import { NavigationData } from "../../types/NavItem";
import { Chip } from "@mui/joy";
import { useOutletContext, Link } from "react-router-dom";

function Toggler(props: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const { defaultExpanded = false, renderToggle, children } = props;

  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

interface SidebarProps {
  currentPage: string;
  navigationData: NavigationData;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, navigationData }) => {
  const context = useOutletContext() as any;

  const { logoutUser, user } = context;

  function handleLogout() {
    logoutUser();
  }
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        marginBottom: "200px",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        // backdropFilter: "blur(100px)",
        // backgroundColor: "#ffffff15",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Link to="/">
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <IconButton variant="soft" color="primary" size="sm">
              <BrightnessAutoRoundedIcon />
            </IconButton>
            <Typography>Nyumba Blockchain.</Typography>
          </Box>
        </Link>
        <ColorSchemeToggle sx={{ ml: "auto" }} />
      </Box>

      <Input
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <Link to="/home">
              <ListItemButton selected={currentPage === "home"}>
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </Link>
          </ListItem>
          {/* CUSTOM NAVIGATION BASED ON USER GOOES HERE */}
          {navigationData.map((item) => (
            <ListItem
              key={item.route}
              nested={item.nested != undefined ? true : false}
            >
              {item.nested ? (
                <Toggler
                  renderToggle={({ open, setOpen }) => (
                    <ListItemButton onClick={() => setOpen(!open)}>
                      {item.icon}
                      <ListItemContent>
                        <Typography level="title-sm">{item.title}</Typography>
                      </ListItemContent>
                      <KeyboardArrowDownIcon
                        sx={{ transform: open ? "rotate(180deg)" : "none" }}
                      />
                    </ListItemButton>
                  )}
                >
                  <List sx={{ gap: 0.5 }}>
                    {item.nested.map((nestedItem) => (
                      <ListItem key={nestedItem.route} sx={{ mt: 0.5 }}>
                        <Link to={nestedItem.route}>
                          <ListItemButton
                            role="menuitem"
                            selected={currentPage === nestedItem.currentPage}
                          >
                            {nestedItem.title}
                          </ListItemButton>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Toggler>
              ) : (
                <Link to={item.route}>
                  <ListItemButton
                    role="menuitem"
                    selected={currentPage === item.currentPage}
                  >
                    {item.icon}
                    <ListItemContent>
                      <Typography level="title-sm">{item.title}</Typography>
                    </ListItemContent>
                    {item.badge && (
                      <Chip size="sm" color="primary" variant="solid">
                        {item.badge}
                      </Chip>
                    )}
                  </ListItemButton>
                </Link>
              )}
            </ListItem>
          ))}
        </List>
        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <Link to="/">
              <ListItemButton>
                <SupportRoundedIcon />
                About
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Avatar
            variant="outlined"
            size="sm"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          />
          <Link to="/profile">
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography level="title-sm">{user.name}</Typography>
              <Typography level="body-xs">{user.role}</Typography>
            </Box>
          </Link>
        </Box>

        <IconButton
          onClick={handleLogout}
          size="sm"
          variant="plain"
          color="neutral"
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
};

export default Sidebar;
