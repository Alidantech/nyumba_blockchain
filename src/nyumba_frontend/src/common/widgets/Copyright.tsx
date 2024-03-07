import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

export default function Copyright(props: any): JSX.Element {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/">Nyumba ICP</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
