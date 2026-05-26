import { Box, Paper, styled, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const CongratsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: "center",
  background: "linear-gradient(135deg, #5ba400 0%, #79d000 100%)",
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  margin: theme.spacing(1),
}));

export const BoxEmoji = styled(Box)({
  position: "absolute",
  top: -30,
  right: -30,
  opacity: 0.15,
  transform: "rotate(15deg)",
});

export const CircleIcon = styled(CheckCircleIcon)(({ theme }) => ({
  fontSize: 80,
  backgroundColor: "rgba(255,255,255,0.15)",
  borderRadius: "50%",
  padding: theme.spacing(1),
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.common.white,
  maxWidth: 500,
  opacity: 0.95,
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.95,
}));
