import { Box, styled } from "@mui/material";
import { applyOpacity } from "../../utils/opacity";

export const EquipePageContainer = styled(Box)<{
  $primary: string;
  $secondary: string;
  $terciary: string;
}>(({ $primary, $secondary, $terciary }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  height: "100vh",
  background: `linear-gradient(
  135deg,
  ${applyOpacity($primary, 1)} 0%,
  ${applyOpacity($primary, 1)} 33%,
  ${applyOpacity($secondary, 1)} 33%,
  ${applyOpacity($secondary, 1)} 66%,
  ${applyOpacity($terciary, 1)} 66%,
  ${applyOpacity($terciary, 1)} 100%
)`,
}));
