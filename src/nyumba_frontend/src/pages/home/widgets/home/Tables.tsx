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
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

import { Table } from "@mui/joy";

export default function TableFiles() {
  return (
    <Table
      hoverRow
      size="sm"
      borderAxis="none"
      variant="soft"
      sx={{
        "--TableCell-paddingX": "1rem",
        "--TableCell-paddingY": "1rem",
      }}
    >
      <thead>
        <tr>
          <th>
            <Typography level="title-sm">Good Morning, John</Typography>
          </th>
          <th>
            {/* <Typography
              level="title-sm"
              endDecorator={<ArrowDropDownRoundedIcon />}
            >
              Last modified
            </Typography> */}
          </th>
          <th>
            {/* <Typography level="title-sm">Size</Typography> */}
          </th>
          <th>
            <Typography level="title-sm">Bal: 300</Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Typography
              level="title-sm"
              // startDecorator={<FolderRoundedIcon color="primary" />}
              sx={{ alignItems: "flex-start" }}
            >
              New Lands
            </Typography>
          </td>
          <td>
            <Typography level="body-sm">$400, $300 ...</Typography>
          </td>
          <td>
            <Typography level="body-sm">3 acre, 50x50</Typography>
          </td>
          <td>
            <AvatarGroup
              size="sm"
              sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
            >
              <Avatar
                src="https://picsumn.photos/200/?random=6"
                srcSet="https://i.pravatar.cc/48?img=6 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=7"
                srcSet="https://i.pravatar.cc/48?img=7 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=8"
                srcSet="https://i.pravatar.cc/48?img=8 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=9"
                srcSet="https://i.pravatar.cc/48?img=9 2x"
              />
            </AvatarGroup>
          </td>
        </tr>
        <tr>
          <td>
            <Typography
              level="title-sm"
              // startDecorator={<FolderRoundedIcon color="primary" />}
              sx={{ alignItems: "flex-start" }}
            >
              Find Rentals Near Your
            </Typography>
          </td>
          <td>
            <Typography level="body-sm">$30, $49 ...</Typography>
          </td>
          <td>
            <Typography level="body-sm">2 bedrooms</Typography>
          </td>
          <td>
            <AvatarGroup
              size="sm"
              sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
            >
              <Avatar
                src="https://picsumn.photos/200/?random=1"
                srcSet="https://i.pravatar.cc/48?img=1 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=9"
                srcSet="https://i.pravatar.cc/48?img=9 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=2"
                srcSet="https://i.pravatar.cc/48?img=2 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=3"
                srcSet="https://i.pravatar.cc/48?img=3 2x"
              />
              <Avatar>+3</Avatar>
            </AvatarGroup>
          </td>
        </tr>
        <tr>
          <td>
            <Typography
              level="title-sm"
              // startDecorator={<FolderRoundedIcon color="primary" />}
              sx={{ alignItems: "flex-start" }}
            >
              Buy Real Estates 
            </Typography>
          </td>
          <td>
            <Typography level="body-sm">$30k, $40k ..</Typography>
          </td>
          <td>
            <Typography level="body-sm">beach houses</Typography>
          </td>
          <td>
            <AvatarGroup
              size="sm"
              sx={{ "--AvatarGroup-gap": "-8px", "--Avatar-size": "24px" }}
            >
              <Avatar
                src="https://picsumn.photos/200/?random=4"
                srcSet="https://i.pravatar.cc/48?img=4 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=8"
                srcSet="https://i.pravatar.cc/48?img=8 2x"
              />
              <Avatar
                src="https://picsumn.photos/200/?random=5"
                srcSet="https://i.pravatar.cc/48?img=5 2x"
              />
            </AvatarGroup>
          </td>
        </tr>
        <tr>
          <td>
            <Typography
              level="title-sm"
              // startDecorator={<FolderRoundedIcon color="primary" />}
              sx={{ alignItems: "flex-start" }}
            >
              Lease farm land
            </Typography>
          </td>
          <td>
            <Typography level="body-sm">$40 per month...</Typography>
          </td>
          <td>
            <Typography level="body-sm">Loam Soil</Typography>
          </td>
          <td>
            <Avatar
              size="sm"
              src="https://picsumn.photos/200/?random=2"
              srcSet="https://i.pravatar.cc/48?img=2 2x"
              sx={{ "--Avatar-size": "24px" }}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export function MobileTableFiles() {
  return (
    <Sheet
      variant="outlined"
      
      sx={{
        display: { xs: "inherit", sm: "none" },
        borderRadius: "sm",
        overflow: "auto",
        backgroundColor: "background.surface",
        "& > *": {
          "&:nth-child(n):not(:nth-last-child(-n+4))": {
            borderBottom: "1px solid",
            borderColor: "divider",
          },
        },
      }}
    >
      <List size="sm" aria-labelledby="table-in-list">
        <ListItem>
          <ListItemButton variant="soft" sx={{ bgcolor: "transparent" }}>
            <ListItemContent sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  level="title-sm"
                  // startDecorator={<FolderRoundedIcon color="primary" />}
                  sx={{ alignItems: "flex-start" }}
                >
                  New Rentals
                </Typography>
                <AvatarGroup
                  size="sm"
                  sx={{
                    "--AvatarGroup-gap": "-8px",
                    "--Avatar-size": "24px",
                  }}
                >
                  <Avatar
                    src="https://picsumn.photos/200/?random=6"
                    srcSet="https://i.pravatar.cc/48?img=6 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=7"
                    srcSet="https://i.pravatar.cc/48?img=7 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=8"
                    srcSet="https://i.pravatar.cc/48?img=8 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=9"
                    srcSet="https://i.pravatar.cc/48?img=9 2x"
                  />
                </AvatarGroup>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography level="body-sm">Get for as low as $300</Typography>

                <Typography level="body-sm">20 km</Typography>
              </Box>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem>
          <ListItemButton variant="soft" sx={{ bgcolor: "transparent" }}>
            <ListItemContent sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  level="title-sm"
                  // startDecorator={<FolderRoundedIcon color="primary" />}
                  sx={{ alignItems: "flex-start" }}
                >
                  Find Land For Lease
                </Typography>
                <AvatarGroup
                  size="sm"
                  sx={{
                    "--AvatarGroup-gap": "-8px",
                    "--Avatar-size": "24px",
                  }}
                >
                  <Avatar
                    src="https://picsumn.photos/200/?random=1"
                    srcSet="https://i.pravatar.cc/48?img=1 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=9"
                    srcSet="https://i.pravatar.cc/48?img=9 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=2"
                    srcSet="https://i.pravatar.cc/48?img=2 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=3"
                    srcSet="https://i.pravatar.cc/48?img=3 2x"
                  />
                  <Avatar>+3k</Avatar>
                </AvatarGroup>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography level="body-sm">Lease for upto $40 per month</Typography>

                <Typography level="body-sm">3km</Typography>
              </Box>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem>
          <ListItemButton variant="soft" sx={{ bgcolor: "transparent" }}>
            <ListItemContent sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  level="title-sm"
                  // startDecorator={<FolderRoundedIcon color="primary" />}
                  sx={{ alignItems: "flex-start" }}
                >
                  New Rentals
                </Typography>
                <AvatarGroup
                  size="sm"
                  sx={{
                    "--AvatarGroup-gap": "-8px",
                    "--Avatar-size": "24px",
                  }}
                >
                  <Avatar
                    src="https://picsumn.photos/200/?random=4"
                    srcSet="https://i.pravatar.cc/48?img=4 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=8"
                    srcSet="https://i.pravatar.cc/48?img=8 2x"
                  />
                  <Avatar
                    src="https://picsumn.photos/200/?random=5"
                    srcSet="https://i.pravatar.cc/48?img=5 2x"
                  />
                </AvatarGroup>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography level="body-sm">Beach apartments at $900</Typography>

                <Typography level="body-sm">300km</Typography>
              </Box>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem>
          <ListItemButton variant="soft" sx={{ bgcolor: "transparent" }}>
            <ListItemContent sx={{ p: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 1,
                }}
              >
                <Typography
                  level="title-sm"
                  // startDecorator={<FolderRoundedIcon color="primary" />}
                  sx={{ alignItems: "flex-start" }}
                >
                  Real Estates
                </Typography>
                <Avatar
                  size="sm"
                  src="https://picsumn.photos/200/?random=2"
                  srcSet="https://i.pravatar.cc/48?img=2 2x"
                  sx={{ "--Avatar-size": "24px" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 2,
                }}
              >
                <Typography level="body-sm"> Buy For $50000</Typography>

                <Typography level="body-sm">6km</Typography>
              </Box>
            </ListItemContent>
          </ListItemButton>
        </ListItem>
      </List>
    </Sheet>
  );
}
