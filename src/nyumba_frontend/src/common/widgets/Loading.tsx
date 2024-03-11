import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import { CountUp } from "use-count-up";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function CircularProgressFullScreen() {
  const [loadingProgress, setLoadingProgress] = useState(30);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        // backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        zIndex: 9999999,
      }}
    >
      <CircularProgress size="md" determinate={false} value={loadingProgress} />
      <Box
        display="flex"
        alignItems="center"
        mt={2}
      >
        <Typography sx={{mr: 1}}>Loading...</Typography>
        {/* <CountUp
          isCounting
          start={95}
          end={100}
          duration={0.3}
          easing="linear"
          updateInterval={0.01}
          onUpdate={(currentValue) => {
            setLoadingProgress(currentValue as number);
          }}
        /> */}
        {/* % */}
      </Box>
    </Box>
  );
}
