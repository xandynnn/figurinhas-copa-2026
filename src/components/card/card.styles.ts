import { Box, ButtonGroup, Grid, styled, Typography } from "@mui/material";
import { applyOpacity, clarityColor } from "../../utils/opacity";

export const CardContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "#fff",
  borderRadius: "8px",
  flexDirection: "column",
  padding: theme.spacing(1),
  height: "calc(100% / 3)",
}));

export const BoxCard = styled(Box)<{
  $backgroundColor: string;
  $quantity: number;
}>(({ $backgroundColor, $quantity }) => ({
  backgroundColor:
    $quantity > 0
      ? clarityColor($backgroundColor, 0.1)
      : clarityColor($backgroundColor, 70),
  display: "flex",
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  overflow: "hidden",
  border:
    $quantity > 0
      ? `4px solid ${applyOpacity("#ffffff", 0.3)}`
      : `4px solid ${applyOpacity("#ffffff", 0.3)}`,
  color: $quantity > 0 ? "#fff" : $backgroundColor,
}));

export const CardCode = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  lineHeight: "30px",
  fontFamily: "Erica One, cursive",
  marginTop: theme.spacing(2),
}));

export const CardNumber = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  lineHeight: "30px",
  fontFamily: "Erica One, cursive",
  marginTop: theme.spacing(2),
}));

export const CardControlGroup = styled(ButtonGroup)({
  position: "absolute",
  bottom: 8,
  left: 4,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  width: "calc(100% - 16px)",
});
