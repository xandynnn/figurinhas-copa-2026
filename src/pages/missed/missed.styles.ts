import { styled, Typography } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: theme.spacing(1),
}));

export const CountryName = styled(Typography)(({ theme }) => ({
  fontFamily: "Erica One, cursive",
  fontSize: 28,
  textTransform: "uppercase",
  padding: theme.spacing(1),
}));
