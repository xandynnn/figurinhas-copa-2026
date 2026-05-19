import {
  Box,
  FormControl,
  IconButton,
  LinearProgress,
  styled,
  Typography,
} from "@mui/material";

export const ControlsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  borderTop: "1px solid #ccc",
  padding: theme.spacing(2),
  paddingTop: theme.spacing(3),
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#fff",
  position: "relative",
  borderBottom: "2px solid #fff",
}));

export const FormControlInput = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "25%",
  },
  [theme.breakpoints.down("md")]: {
    flex: 1,
    flexDirection: "row",
  },
}));

export const FormControlButtons = styled(FormControl)({
  flexDirection: "row",
  gap: 2,
  justifyContent: "flex-end",
});

export const Total = styled(Typography)({
  fontFamily: "Erica One, sans-serif",
  fontSize: "22px",
  fontWeight: 400,
  color: "#000",
});

export const Actual = styled(Typography)({
  fontFamily: "Erica One, sans-serif",
  fontSize: "22px",
  fontWeight: 400,
  color: "#000",
});

export const BoxTexts = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "#fff",
    padding: theme.spacing(1),
    zIndex: 100,
  },
}));

export const RightBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "flex-end",
  justifyContent: "center",
}));

export const Texts = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
});

export const Percentage = styled(Typography)(() => ({
  fontFamily: "Erica One, sans-serif",
  fontSize: "20px",
  fontWeight: 400,
  color: "#000",
}));

export const HomeButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  width: 48,
  height: 48,
  "&:hover": {
    backgroundColor: "primary.dark",
  },
}));

export const ProgressBarLinear = styled(LinearProgress)<{
  $progressBackground: string;
  $progressColor: string;
}>(({ $progressBackground, $progressColor }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: 8,
  backgroundColor: $progressBackground,
  "& .MuiLinearProgress-bar": {
    backgroundColor: $progressColor,
  },
}));
