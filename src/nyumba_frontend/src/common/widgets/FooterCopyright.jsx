import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link to="/">Nyumba Blockchain&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
