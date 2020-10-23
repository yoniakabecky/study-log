import { red, grey, purple, lime, lightBlue } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const common = {
  typography: {
    h2: {
      marginTop: "1.5rem",
    },
  },
};

const defaultTheme = createMuiTheme({
  ...common,
  palette: {
    type: "dark",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: purple[200],
    },
    error: {
      main: red[400],
    },
  },
});

const lightTheme = createMuiTheme({
  ...common,
  palette: {
    type: "light",
    primary: {
      main: lime[300],
    },
    secondary: {
      main: lightBlue.A200,
    },
    error: {
      main: red.A400,
    },
  },
});

export { defaultTheme as default, lightTheme };
