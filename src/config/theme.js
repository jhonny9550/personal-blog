import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';

import NunitoRegularTtf from '../assets/fonts/Nunito-Regular.ttf';

const nunito = {
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Nunito'),
    local('Nunito-Regular'),
    url(${NunitoRegularTtf}) format('ttf)
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
};

let theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920
    }
  },
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: {
      main: teal[400],
      dark: teal[500]
    },
    background: {
      default: grey[100]
    }
  },
  typography: {
    fontFamily: 'Nunito, Arial'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [nunito]
      }
    }
  }
});

theme.typography.h5.fontWeight = 700;
theme.typography.h3.fontWeight = 700;
theme.typography.subtitle1.fontWeight = 800;

theme.typography.body1 = {
  fontSize: '1rem', // 13 px b.16
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem'
  }
};

theme.typography.body2 = {
  fontSize: '0.9rem', // 13 px b.16
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2rem'
  }
};

/* 
fontSize: 18,
    h1: {
      fontSize: '2.5em', // 40 px b.16
      fontWeight: 500
    },
    h2: {
      fontSize: '2em', // 32 px b.16
      fontWeight: 500
    },
    h3: {
      fontSize: '1.75em', // 28 px b.16
      fontWeight: 500
    },
    h4: {
      fontSize: '1.75em', // 24 px b.16
      fontWeight: 500
    },
    h5: {
      fontSize: '1.25em' // 20 px b.16
    },
    h6: {
      fontSize: '1em' // 16 px b.16
    },
    body1: {
      fontSize: '1em' // 13 px b.16
    },
    body2: {
      fontSize: 18
    },
    button: {
      fontSize: '1em'
    }
*/

theme = responsiveFontSizes(theme);

export default theme;
