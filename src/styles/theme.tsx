import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#e25590'
        },
        secondary: {
            main: '#191835',
        }, 
        text: {
          primary: '#000',
          secondary: '#888'
        }
    },
    overrides: {
        MuiCssBaseline: {
          '@global': {
            a: {
              '&:hover': {
                color: '#FFFFFF'
              },
              '&:focus': {
                color: '#FFFFFF'
              }
            },
          },
        },
    },
});

export default theme;
