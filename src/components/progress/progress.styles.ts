import { Box, styled, Typography } from "@mui/material";

export const BoxCircularProgress = styled(Box)({
  position: "relative",
  display: "inline-flex",
});

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 18,
  fontWeight: 300,
  fontFamily: "Erica One, cursive",
}));

export const BoxLabel = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
