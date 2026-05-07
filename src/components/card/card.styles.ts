import { Box, ButtonGroup, Grid, styled, Typography } from "@mui/material";
import { applyOpacity, clarityColor } from "../../utils/opacity";

export const CardContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: "#fff",
  borderRadius: theme.spacing(1),
  flexDirection: "column",
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    height: "calc(100vh / 3.05)",
    minHeight: 275,
  },
  [theme.breakpoints.down("md")]: {
    height: "auto",
    width: "100%",
  },
}));

export const BoxCard = styled(Box)<{
  $backgroundColor: string;
  $quantity: number;
}>(({ $backgroundColor, $quantity, theme }) => ({
  backgroundColor:
    $quantity > 0
      ? clarityColor($backgroundColor, 0.1)
      : clarityColor($backgroundColor, 70),
  display: "flex",
  position: "relative",
  height: "100%",
  overflow: "hidden",
  border:
    $quantity > 0
      ? `4px solid ${applyOpacity("#ffffff", 0.3)}`
      : `4px solid ${applyOpacity("#ffffff", 0.3)}`,
  color: $quantity > 0 ? "#fff" : $backgroundColor,
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: theme.spacing(2),
  },
}));

export const CardCode = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  lineHeight: "30px",
  fontFamily: "Erica One, cursive",
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    paddingTop: 9,
    paddingBottom: 9,
  },
}));

export const CardNumber = styled(Typography)(({ theme }) => ({
  fontSize: "42px",
  lineHeight: "30px",
  fontFamily: "Erica One, cursive",
  marginTop: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginTop: theme.spacing(2),
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    paddingTop: 9,
    paddingBottom: 9,
  },
}));

export const CardControlGroup = styled(ButtonGroup)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  width: "calc(100% - 16px)",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: 8,
    left: 4,
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
    justifyContent: "flex-end",
    height: "100%",
  },
}));

export const BoxGroupButton = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  display: "flex",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    height: "100%",
  },
}));

export const BoxToolTipMobile = styled(Box)(({ theme }) => ({
  display: "block",
  marginRight: theme.spacing(1),
  background: "#fff",
  padding: theme.spacing(1, 0.5),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const BoxToolTipDesktop = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));
