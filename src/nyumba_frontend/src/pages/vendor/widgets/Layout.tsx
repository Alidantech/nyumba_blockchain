import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import AddIcon from "@mui/icons-material/Add";

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: "background.appBody",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "auto",
            md: "auto",
          },
          width: "100%",
          gridTemplateRows: "35px 1fr",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Header(props: BoxProps) {
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SideNav(props: BoxProps) {
  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          p: 2,
          bgcolor: "background.surface",
          height: "100vh",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            sm: "none",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SidePane(props: BoxProps) {
  return (
    <Box
      className="Inbox"
      {...props}
      sx={[
        {
          bgcolor: "background.surface",
          height: "100vh",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            md: "none",
          },
          gridTemplateRows: "auto 90vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props: BoxProps) {
  return (
    <Box
      component="main"
      className="Main"
      {...props}
      sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
}

function SideDrawer(
  props: BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> }
) {
  const { onClose, ...other } = props;
  return (
    <Box
      {...other}
      sx={[
        { position: "fixed", zIndex: 1200, width: "100%", height: "100%" },
        ...(Array.isArray(other.sx) ? other.sx : [other.sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: (theme) =>
            `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: "max-content",
          height: "100%",
          p: 2,
          boxShadow: "lg",
          bgcolor: "background.surface",
        }}
      >
        {other.children}
      </Sheet>
    </Box>
  );
}

function FloatingActionButton() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1200,
      }}
    >
      <Sheet
        sx={{
          bgcolor: "background.primary",
          boxShadow: "lg",
          p: 2,
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column", // Add this line
          alignItems: "center",
          justifyContent: "center",
          width: { xs: 40, md: 64 },
          height: { xs: 40, md: 64 },
          cursor: "pointer",
        }}
      >
        <AddIcon
          sx={{ fontSize: "30px", fontWeight: "bold" }}
          color="primary"
        />
      </Sheet>
    </Box>
  );
}

export default {
  Root,
  Header,
  SideNav,
  SidePane,
  SideDrawer,
  Main,
  FloatingActionButton,
};
