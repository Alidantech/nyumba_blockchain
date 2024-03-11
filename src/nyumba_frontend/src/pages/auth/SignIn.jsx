import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../common/widgets/Footer";
import getLPTheme from "../../theme/getLPTheme";
import { Link } from "react-router-dom";
import { useNavigate, useOutletContext } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Paper from '@mui/material/Paper';

export default function SignIn() {
  const context = useOutletContext();
  const navigate = useNavigate();
  const [themeMode, setThemeMode] = useState("dark");
  useEffect(() => {
    // Retrieve the value from local storage
    const localThemeMode = localStorage.getItem("joy-mode");
    if (localThemeMode) {
      setThemeMode(localThemeMode);
    }
  });

  const { loginUser } = context;
  const [selectedRole, setSelectedRole] = React.useState(null);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginSuccess = loginUser({
      id: 1234335325,
      username: data.get("email"),
      role: selectedRole,
    });

    if (loginSuccess) navigate("/home/", { replace: true });
    else navigate("/signin/");
  };
  const LPtheme = createTheme(getLPTheme(themeMode));

  return (
    <ThemeProvider theme={LPtheme}>
      <Container component="main" sx={{height:"100vh"}} maxWidth="sm">
        <CssBaseline />
                <Paper elevation={6} sx={{ p: 4, marginTop: { xs: 4, md: 8 } }}>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* Add the radio buttons for selecting user role */}
            <FormLabel component="legend">Select Role</FormLabel>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              value={selectedRole}
              onChange={handleRoleChange}
            >
              <FormControlLabel
                value="buyer"
                control={<Radio />}
                label="Buyer"
              />
              <FormControlLabel
                value="seller"
                control={<Radio />}
                label="Seller"
              />
              <FormControlLabel value="govt" control={<Radio />} label="Govt" />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
            </RadioGroup>

            {/* Continue with the existing form fields */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Paper>
      </Container>
      <Divider/>
      <Footer />
    </ThemeProvider>
  );
}
