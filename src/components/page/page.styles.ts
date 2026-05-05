import { Grid, styled } from "@mui/material";

export const PageContainer = styled(Grid)({
  // height: "100vh",
  flex: 1,
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Side = styled(Grid)({
  width: "50%",
  height: "100%",
  padding: 8,
  "&:nth-child(1)": {
    borderRight: "1px solid #ccc",
  },
});
