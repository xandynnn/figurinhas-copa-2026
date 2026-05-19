import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { AppRoot } from "./app";
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRoot />
  </ThemeProvider>,
);
