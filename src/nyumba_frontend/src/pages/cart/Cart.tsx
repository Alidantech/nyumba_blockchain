import * as React from "react";
import {} from "@mui/joy/styles";
import { FocusTrap } from "@mui/base/FocusTrap";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import Layout from "./widgets/cart/Layout";
import Navigation from "./widgets/cart/Navigation";
import Mails from "./widgets/cart/Mails";
import EmailContent from "./widgets/cart/ItemContent";
import WriteEmail from "./widgets/cart/WriteEmail";
import Header from "./widgets/cart/Header";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { Link } from "react-router-dom";

export default function Cart() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Layout.Root>
        <Layout.SidePane>
          <Box
            sx={{
              height: "90%",
              overflow: "auto",
              pt: { xs: 5, md: 0 },
            }}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ alignItems: "center", gap: 1 }}>
                <Typography
                  level="title-lg"
                  textColor="text.secondary"
                  component="h1"
                >
                  My Cart
                </Typography>
                <Typography level="title-sm" textColor="text.tertiary">
                  10 Items
                </Typography>
              </Box>
              <Button
                size="sm"
                startDecorator={<CreateRoundedIcon />}
                onClick={() => setOpen(true)}
                sx={{ ml: "auto" }}
              >
                Add Items
              </Button>
              <FocusTrap open={open} disableAutoFocus disableEnforceFocus>
                <WriteEmail open={open} onClose={() => setOpen(false)} />
              </FocusTrap>
            </Box>
            <Mails />
            <Stack
              id="tab-bar"
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              spacing={1}
              sx={{
                // display: { xs: "flex", sm: "none" },
                zIndex: "999",
                bottom: 0,
                position: "fixed",
                width: { xs: "100vw", sm: "85vw" },
                py: 2,
                backgroundColor: "background.body",
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="space-around" flexDirection="column">
                <Typography level="title-lg">TOTAL:</Typography>
                <Typography fontSize="1.5em" color="primary">
                  {" "}
                  $20000
                </Typography>
              </Box>

              <Link to="/dashboard/cart/checkout">
                <Button
                  // variant="plain"
                  color="primary"
                  aria-pressed="true"
                  size="lg"
                  // startDecorator={<FolderRoundedIcon />}
                  sx={{ flexDirection: "row" }}
                >
                  Checkout
                </Button>
              </Link>
            </Stack>
          </Box>
        </Layout.SidePane>
        <Layout.Main>
          <EmailContent />
        </Layout.Main>
      </Layout.Root>
    </>
  );
}
