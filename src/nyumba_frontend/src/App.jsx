import { useState } from 'react';
import { nyumba_backend } from 'declarations/nyumba_backend';
import React from 'react';
import { AppBar, Container, CssBaseline, Toolbar, Typography, Paper } from '@mui/material';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    nyumba_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Awesome Page</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to My Page
          </Typography>
          <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">Enter your name: &nbsp;</label>
            <input id="name" alt="Name" type="text" />
            <button type="submit">Click Me!</button>
          </form>
          <section id="greeting">{greeting}</section>
          <Typography variant="body1">
            This is a simple example page using Material-UI. You can customize and expand it based
            on your project requirements.
          </Typography>
        </Paper>
      </Container>

      <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} My Page. All rights reserved.
        </Typography>
      </footer>

    </main>
  );
}

export default App;
