import { createMuiTheme } from "@material-ui/core/styles";
import { red, orange, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: orange.A200,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h2: {
      marginTop: "1.5rem",
    },
  },
});

export default theme;
