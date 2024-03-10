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

interface MoreInfoProps {
  // Define your props here
}

const MoreInfo: React.FC<MoreInfoProps> = (props) => {
  // Implement your component logic here

  return (
    <Sheet
      sx={{
        m: 0,
        p: 0,
        display: { xs: "none", md: "initial" },
        borderLeft: "1px solid",
        borderColor: "divider",
        height: "100vh",
      }}
    >
      <Box sx={{ p: 2, display: "flex", alignItems: "center" }}>
        <Typography level="title-md" sx={{ flex: 1 }}>
          torres-del-paine.png
        </Typography>
        <IconButton component="span" variant="plain" color="neutral" size="sm">
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Divider />
      <Tabs>
        <TabList>
          <Tab sx={{ flexGrow: 1 }}>
            <Typography level="title-sm">Details</Typography>
          </Tab>
          <Tab sx={{ flexGrow: 1 }}>
            <Typography level="title-sm">Activity</Typography>
          </Tab>
        </TabList>
        <TabPanel value={0} sx={{ p: 0 }}>
          <AspectRatio ratio="21/9">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format"
              srcSet="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format&dpr=2 2x"
            />
          </AspectRatio>
          <Box sx={{ p: 2, display: "flex", gap: 1, alignItems: "center" }}>
            <Typography level="title-sm" mr={1}>
              Shared with
            </Typography>
            <AvatarGroup size="sm" sx={{ "--Avatar-size": "24px" }}>
              <Avatar
                src="https://i.pravatar.cc/24?img=6"
                srcSet="https://i.pravatar.cc/48?img=6 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=7"
                srcSet="https://i.pravatar.cc/48?img=7 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=8"
                srcSet="https://i.pravatar.cc/48?img=8 2x"
              />
              <Avatar
                src="https://i.pravatar.cc/24?img=9"
                srcSet="https://i.pravatar.cc/48?img=9 2x"
              />
            </AvatarGroup>
          </Box>
          <Divider />
          <Box
            sx={{
              gap: 2,
              p: 2,
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              "& > *:nth-child(odd)": { color: "text.secondary" },
            }}
          >
            <Typography level="title-sm">Type</Typography>
            <Typography level="body-sm" textColor="text.primary">
              Image
            </Typography>
            <Typography level="title-sm">Size</Typography>
            <Typography level="body-sm" textColor="text.primary">
              3,6 MB (3,258,385 bytes)
            </Typography>
            <Typography level="title-sm">Location</Typography>
            <Typography level="body-sm" textColor="text.primary">
              Travel pictures
            </Typography>
            <Typography level="title-sm">Owner</Typography>
            <Typography level="body-sm" textColor="text.primary">
              Michael Scott
            </Typography>
            <Typography level="title-sm">Modified</Typography>
            <Typography level="body-sm" textColor="text.primary">
              26 October 2016
            </Typography>
            <Typography level="title-sm">Created</Typography>
            <Typography level="body-sm" textColor="text.primary">
              5 August 2016
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ py: 2, px: 1 }}>
            <Button
              variant="plain"
              size="sm"
              endDecorator={<EditRoundedIcon />}
            >
              Add a description
            </Button>
          </Box>
        </TabPanel>
        <TabPanel
          value={1}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography level="title-md">This week</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/24?img=2"
              srcSet="https://i.pravatar.cc/48?img=2 2x"
            />
            <div>
              <Box
                sx={{ display: "flex", gap: 0.5, alignItems: "center", mb: 1 }}
              >
                <Typography level="title-sm" sx={{ alignItems: "center" }}>
                  You
                </Typography>
                <Typography level="body-sm">shared</Typography>
                <Typography level="title-sm">torres-del-paine.png</Typography>
              </Box>
              <Chip variant="outlined" startDecorator={<ShareRoundedIcon />}>
                Shared with 3 users
              </Chip>
              <Typography level="body-xs" sx={{ mt: 1 }}>
                3 Nov 2023
              </Typography>
            </div>
          </Box>
          <Typography level="title-md">Older</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/24?img=2"
              srcSet="https://i.pravatar.cc/48?img=2 2x"
            />
            <div>
              <Box
                sx={{ display: "flex", gap: 0.5, alignItems: "center", mb: 1 }}
              >
                <Typography level="title-sm" sx={{ alignItems: "center" }}>
                  You
                </Typography>
                <Typography level="body-sm">edited</Typography>
                <Typography level="title-sm">torres-del-paine.png</Typography>
              </Box>
              <Chip variant="outlined" startDecorator={<EditRoundedIcon />}>
                Changed name
              </Chip>
              <Typography level="body-xs" sx={{ mt: 1 }}>
                12 Apr 2021
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/24?img=2"
              srcSet="https://i.pravatar.cc/48?img=2 2x"
            />
            <div>
              <Box
                sx={{ display: "flex", gap: 0.5, alignItems: "center", mb: 1 }}
              >
                <Typography level="title-sm" sx={{ alignItems: "center" }}>
                  You
                </Typography>
                <Typography level="body-sm">created</Typography>
                <Typography level="title-sm">torres-del-paine.png</Typography>
              </Box>
              <Chip variant="outlined" startDecorator={<EditRoundedIcon />}>
                Added 5 Apr 2021
              </Chip>
              <Typography level="body-xs" sx={{ mt: 1 }}>
                12 Apr 2021
              </Typography>
            </div>
          </Box>
        </TabPanel>
      </Tabs>
    </Sheet>
  );
};

export default MoreInfo;
