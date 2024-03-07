import Box from "@mui/material/Box";
import Copyright from "../../common/widgets/Copyright";

export default function Dashboard() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <Copyright />
    </Box>
  );
}
