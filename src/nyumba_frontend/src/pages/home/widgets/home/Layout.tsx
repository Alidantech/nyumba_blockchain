import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";

function Root(props: BoxProps) {
  return (
    <Box
      {...props}
      className="ROOT-BOX"
      style={{paddingTop: 0, gridTemplateRows: "51px 1fr"}}
      sx={[
        {
          m: 0,
          p: 0,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
          },
          width: "100%",
          overflow: { xs: "hidden", sm: "hidden" },
          height: { xs: "100%", sm: "100%" },
          pt: { xs: 0, sm: 2 },
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
          m: 0,
          overflow: { xs: "auto", sm: "auto" },
          height: { xs: "100%", sm: "100vh" },
          p: 2,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}


export default {
  Root, 
  Main,
};
