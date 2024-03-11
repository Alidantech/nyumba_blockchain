import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListDivider from "@mui/joy/ListDivider";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Stack from "@mui/joy/Stack";
import Chip from "@mui/joy/Chip";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

interface RecentItemsProps {
  // items: string[];
}

const RecentItems: React.FC<RecentItemsProps> = ({}) => {
  return (
    <>
      {/* <Sheet
        variant="outlined"
        sx={{
          // display: { xs: "inherit", sm: "none" },
          borderRadius: "sm",
          height:"auto",
          // overflow: "auto",
          backgroundColor: "background.surface",
          "& > *": {
            "&:nth-child(n):not(:nth-last-child(-n+4))": {
              borderBottom: "1px solid",
              borderColor: "divider",
            },
          },
        }}
      > */}
      <Card variant="outlined" size="sm">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Kilimani Real Estate</Typography>
            <Typography level="body-sm">$4500</Typography>
          </Box>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
                borderRadius: "9999999px",
              }}
            >
              <IconButton
                component="span"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <MoreVertRoundedIcon />
              </IconButton>
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <EditRoundedIcon />
                Save to Favorites
              </MenuItem>
              <MenuItem>
                <ShareRoundedIcon />
                Add to cart
              </MenuItem>
              <MenuItem sx={{ textColor: "danger.500" }}>
                <DeleteRoundedIcon />
                Remove
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
        <CardOverflow
          sx={{
            borderBottom: "1px solid",
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <AspectRatio ratio="16/9" color="primary" sx={{ borderRadius: 0 }}>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=400&auto=format"
              srcSet="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=400&auto=format&dpr=2 2x"
            />
          </AspectRatio>
        </CardOverflow>
        <Typography level="body-xs">Added 27 Jun 2023</Typography>
      </Card>
      <Card variant="outlined" size="sm">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Uphill Heights</Typography>
            <Typography level="body-sm">$70 per month</Typography>
          </Box>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
              }}
            >
              <IconButton
                component="span"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <MoreVertRoundedIcon />
              </IconButton>
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <EditRoundedIcon />
                Save to Favorites
              </MenuItem>
              <MenuItem>
                <ShareRoundedIcon />
                Add to cart
              </MenuItem>
              <MenuItem sx={{ textColor: "danger.500" }}>
                <DeleteRoundedIcon />
                Remove
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
        <CardOverflow
          sx={{
            borderBottom: "1px solid",
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <AspectRatio
            ratio="16/9"
            color="primary"
            sx={{ borderRadius: 0, color: "primary.plainColor" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InsertDriveFileRoundedIcon />
            </Box>
          </AspectRatio>
        </CardOverflow>
        <Typography level="body-xs">Today</Typography>
      </Card>
      <Card
        variant="solid"
        invertedColors
        size="sm"
        sx={{
          border: "1px solid",
          borderColor: "var(--joy-palette-neutral-outlinedBorder)",
          minHeight: { xs: 250, md: "100%" },
        }}
      >
        <CardContent
          sx={{
            mb: "auto",
            flexGrow: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Abadares Lands</Typography>
            <Typography level="body-xs" mt={0.5}>
              Added 5 Apr 2021
            </Typography>
          </Box>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
              }}
            >
              <IconButton
                component="span"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <MoreVertRoundedIcon />
              </IconButton>
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <EditRoundedIcon />
                Save to Favorites
              </MenuItem>
              <MenuItem>
                <ShareRoundedIcon />
                Add to cart
              </MenuItem>
              <MenuItem sx={{ textColor: "danger.500" }}>
                <DeleteRoundedIcon />
                Remove
              </MenuItem>
            </Menu>
          </Dropdown>
        </CardContent>
        <CardCover>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format"
            srcSet="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format&dpr=2 2x"
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))",
          }}
        />
      </Card>
      <Card
        variant="solid"
        size="sm"
        invertedColors
        sx={{
          minHeight: { xs: 250, md: "100%" },
          border: "1px solid",
          borderColor: "var(--joy-palette-neutral-outlinedBorder)",
        }}
      >
        <CardContent
          sx={{
            mb: "auto",
            flexGrow: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Lake View </Typography>
            <Typography level="body-xs" mt={0.5}>
              Added 2 Mar 2021
            </Typography>
          </Box>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
              }}
            >
              <IconButton
                component="span"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <MoreVertRoundedIcon />
              </IconButton>
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <EditRoundedIcon />
                Rename file
              </MenuItem>
              <MenuItem>
                <ShareRoundedIcon />
                Share file
              </MenuItem>
              <MenuItem sx={{ textColor: "danger.500" }}>
                <DeleteRoundedIcon />
                Delete file
              </MenuItem>
            </Menu>
          </Dropdown>
        </CardContent>
        <CardCover>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1599593752325-ffa41031056e?w=400&h=400&auto=format"
            srcSet="https://images.unsplash.com/photo-1599593752325-ffa41031056e?w=400&h=400&auto=format&dpr=2 2x"
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))",
          }}
        />
      </Card>
      <Card variant="outlined" size="sm">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Kilimani apartments</Typography>
            <Typography level="body-sm">$30000</Typography>
          </Box>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
                borderRadius: "9999999px",
              }}
            >
              <IconButton
                component="span"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <MoreVertRoundedIcon />
              </IconButton>
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <EditRoundedIcon />
                Rename file
              </MenuItem>
              <MenuItem>
                <ShareRoundedIcon />
                Share file
              </MenuItem>
              <MenuItem sx={{ textColor: "danger.500" }}>
                <DeleteRoundedIcon />
                Delete file
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
        <CardOverflow
          sx={{
            borderBottom: "1px solid",
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <AspectRatio ratio="16/9" color="primary" sx={{ borderRadius: 0 }}>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&h=400&auto=format"
              srcSet="https://images.unsplash.com/photo-1572445271230-a78b5944a659?w=400&h=400&auto=format&dpr=2 2x"
            />
          </AspectRatio>
        </CardOverflow>
        <Typography level="body-xs">Added 25 May 2019</Typography>
      </Card>
      <Card variant="outlined" size="sm">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography level="title-md">Ruiru West Land 50 by 100</Typography>
            <Typography level="body-sm">$90000</Typography>
          </Box>
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
                borderRadius: "9999999px",
              }}
            >
              <IconButton
                component="span"
                variant="plain"
                color="neutral"
                size="sm"
              >
                <MoreVertRoundedIcon />
              </IconButton>
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <EditRoundedIcon />
                Save to Favorites
              </MenuItem>
              <MenuItem>
                <ShareRoundedIcon />
                Add to cart
              </MenuItem>
              <MenuItem sx={{ textColor: "danger.500" }}>
                <DeleteRoundedIcon />
                Remove
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
        <CardOverflow
          sx={{
            borderBottom: "1px solid",
            borderTop: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <AspectRatio
            ratio="16/9"
            color="primary"
            sx={{ borderRadius: 0, color: "primary.plainColor" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InsertDriveFileRoundedIcon />
            </Box>
          </AspectRatio>
        </CardOverflow>
        <Typography level="body-xs">Yeterday</Typography>
      </Card>
      {/* </Sheet> */}
    </>
  );
};

export default RecentItems;
