import { Box, styled, Typography } from "@mui/material";

export const BoxTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderTopLeftRadius: "30px",
  borderTopRightRadius: "30px",
  borderBottomLeftRadius: "30px",
  padding: theme.spacing(0, 2),
  width: "100%",
  height: "100%",
}));

export const WeAreText = styled(Typography)<{ $color: string }>(
  ({ $color }) => ({
    fontSize: "4rem",
    textTransform: "uppercase",
    color: `${$color} !important`,
  }),
);

export const CountryName = styled(Typography)<{ $color: string }>(
  ({ $color }) => ({
    fontSize: "3rem",
    textTransform: "uppercase",
    fontWeight: "bolder",
    lineHeight: "3rem",
    color: `${$color} !important`,
  }),
);
