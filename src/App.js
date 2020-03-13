import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './navbar/Nav';
import Routes from './Routes';
import { ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import theme from './config/theme';
import Footer from './footer/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Nav />
        <Container disableGutters fixed maxWidth='md'>
          <Routes />
        </Container>
      </Router>
      <Container disableGutters fixed maxWidth='md'>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
