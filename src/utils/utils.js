import { grey, orange } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const base = createTheme({
  palette: {
    primary: { main: grey[900], light: grey[50] },
    secondary: { main: grey[400] },
    warning: { main: orange[500] },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
