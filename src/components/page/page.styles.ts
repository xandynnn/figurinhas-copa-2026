import { Grid, styled } from "@mui/material";

export const PageContainer = styled(Grid)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("md")]: {
    flex: 1,
  },
  [theme.breakpoints.down("md")]: {
    paddingBottom: theme.spacing(1),
    minHeight: "100vh",
    gap: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
}));

export const Side = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  "&:nth-child(1)": {
    borderRight: "1px solid #ccc",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    paddingTop: 0,
    paddingBottom: 0,
  },
  [theme.breakpoints.up("md")]: {
    width: "50%",
    flexDirection: "row",
  },
}));
