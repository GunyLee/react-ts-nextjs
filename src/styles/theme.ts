import { createTheme } from "@mui/material/styles";
import { deepOrange, amber } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: deepOrange,
    secondary: amber,
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          width: "auto",
          height: "auto",
          fontSize: "1.25rem",
          padding: ".25rem",
        },
        fontSizeSmall: {
          fontSize: "1rem",
        },
        fontSizeLarge: {
          fontSize: "1.75rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        iconSizeSmall: {
          "& > span:first-child": {
            fontSize: "1rem",
            marginBottom: ".1rem",
          },
        },
        iconSizeMedium: {
          "& > span:first-child": {
            fontSize: "1.1rem",
            marginBottom: ".1rem",
          },
        },
        iconSizeLarge: {
          "& > span:first-child": {
            fontSize: "1.2rem",
            marginBottom: ".1rem",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          width: "2em",
          height: "2em",
        },
      },
    },
  },
});
