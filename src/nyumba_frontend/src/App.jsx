import { useState } from "react";
import { nyumba_backend } from "declarations/nyumba_backend";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PagesRouter from "./routes/public.routes";
import AuthProvider from "./context/auth.context";
// import getLPTheme from './theme/getLPTheme'

function App() {
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    nyumba_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }
  // const LPtheme = createTheme(getLPTheme("dark"));

  return (
    <>
      {/* <ThemeProvider theme={LPtheme}> */}

      <AuthProvider isSignedIn={true}>
        <RouterProvider router={PagesRouter} />
      </AuthProvider>

      {/* </ThemeProvider> */}
    </>
  );
}

export default App;

{
  /* <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <button type="submit">Click Me!</button>
          </form>
          <section id="greeting">{greeting}</section> */
}
