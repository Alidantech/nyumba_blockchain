import React, {useEffect, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./widgets/checkout/AddressForm";
import PaymentForm from "./widgets/checkout/PaymentForm";
import Review from "./widgets/checkout/Review";
import getLPTheme from "../../theme/getLPTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const steps = ["Documents Shipping", "Review"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [themeMode, setThemeMode] = useState("dark");

   useEffect(() => {
     // Your other useEffect code...

     // Dynamically set document title based on activeStep
     switch (activeStep) {
       case 0:
         document.title = "Nyumba | Checkout - Documents Shipping Address";
         break;
       case 1:
        document.title = "Nyumba | Checkout - Review Your Order";
         break;
      
       default:
         document.title = "Nyumba | Checkout";
         break;
     }
   }, [activeStep]);

  useEffect(() => {
    // Retrieve the value from local storage
    const storedValue = localStorage.getItem("joy-mode");

    // If the value exists, set the initial state of themeMode
    if (storedValue) {
      setThemeMode(storedValue);
    }
  }, []);

  const LPtheme = createTheme(getLPTheme(themeMode));

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
              <Link to="/orders">
                <Button sx={{mt:2}} fullWidth variant="contained">View Orders</Button>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        {/* <Copyright /> */}
      </Container>
    </ThemeProvider>
  );
}
