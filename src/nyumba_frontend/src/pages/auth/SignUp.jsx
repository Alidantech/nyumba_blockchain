import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../../common/widgets/Footer";
import getLPTheme from "../../theme/getLPTheme";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

export default function SignUp() {
  const [selectedRole, setSelectedRole] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [themeMode, setThemeMode] = useState("dark");
  useEffect(() => {
    // Retrieve the value from local storage
    const localThemeMode = localStorage.getItem("joy-mode");
    if (localThemeMode) {
      setThemeMode(localThemeMode);
    }
  });

  const LPtheme = createTheme(getLPTheme(themeMode));

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ height: "100vh" }}>
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
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
              </Grid>
              <TextField
                required
                margin="normal"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                required
                margin="normal"
                name="password"
                // label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
              {/* Add the radio buttons for selecting user role */}
              <FormLabel component="legend">Select Role</FormLabel>
              <RadioGroup
                row
                aria-label="role"
                name="role"
                value={selectedRole}
                // onChange={}
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
              </RadioGroup>
              <FormControlLabel sx={{mt: 3}}
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accept terms and conditions"
              />
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Divider />
      <Footer />
    </ThemeProvider>
  );
}
