import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Erica One, sans-serif",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fefefe",
          ".root": {
            display: "flex",
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 106,
        },
      },
    },
  },
});
