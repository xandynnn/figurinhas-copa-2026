import { Box, styled } from "@mui/material";
import { theme } from "../../theme";

export const BoxHome = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(4),
  padding: theme.spacing(4),
}));

export const ProgressInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(1),
}));

export const ProgressBox = styled(Box)({
  width: "100%",
  maxWidth: 500,
});
