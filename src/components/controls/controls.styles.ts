import { Box, styled } from "@mui/material";

export const ControlsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  borderTop: "1px solid #ccc",
  padding: theme.spacing(2),
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#fff",
}));
