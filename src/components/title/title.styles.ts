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
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const WeAreText = styled(Typography)<{ $color: string }>(
  ({ $color, theme }) => ({
    fontSize: "4rem",
    textTransform: "uppercase",
    color: `${$color} !important`,
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  }),
);

export const CountryName = styled(Typography)<{ $color: string }>(
  ({ $color, theme }) => ({
    fontSize: "3rem",
    textTransform: "uppercase",
    fontWeight: "bolder",
    lineHeight: "3rem",
    color: `${$color} !important`,
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
      lineHeight: "3rem",
      textAlign: "center",
    },
  }),
);

export const BoxMobile = styled(Typography)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

export const BoxDesktop = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));
