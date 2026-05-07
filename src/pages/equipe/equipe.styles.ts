import { Box, styled } from "@mui/material";
import { applyOpacity } from "../../utils/opacity";

export const EquipePageContainer = styled(Box)<{
  $primary: string;
  $secondary: string;
  $tertiary: string;
}>(({ $primary, $secondary, $tertiary }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: "100vh",
  height: "100%",
  background: `linear-gradient(
  135deg,
  ${applyOpacity($primary, 1)} 0%,
  ${applyOpacity($primary, 1)} 33%,
  ${applyOpacity($secondary, 1)} 33%,
  ${applyOpacity($secondary, 1)} 66%,
  ${applyOpacity($tertiary, 1)} 66%,
  ${applyOpacity($tertiary, 1)} 100%
)`,
}));
