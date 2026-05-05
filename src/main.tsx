import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>,
);
