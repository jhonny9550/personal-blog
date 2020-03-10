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
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: teal
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

theme = responsiveFontSizes(theme);

export default theme;
