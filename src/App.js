import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './navbar/Nav';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
