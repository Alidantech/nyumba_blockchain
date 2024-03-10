import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(300px, 500px) minmax(500px, 1fr)",
          },
          gridTemplateRows: "0 1fr",
          height: "100%",
          overflow: "Hidden"
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
          borderRight: "1px solid",
          borderColor: "divider",
          height: "100vh",
          oveflow: "auto"
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
      sx={[
        {
          p: 2,
          height: "100vh",
          oveflow: "auto",
          display: {
            xs: "none",
            md: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}



export default {
  Root,
  SidePane,
  Main,
};
