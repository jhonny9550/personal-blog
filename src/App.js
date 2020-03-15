import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './navbar/Nav';
import Routes from './Routes';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
