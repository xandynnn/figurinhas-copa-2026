import { Box, styled } from "@mui/material";

export const FlagContainer = styled(Box)<{ $noBorders?: boolean }>(
  ({ theme, $noBorders }) => ({
    padding: 0,
    border: $noBorders ? "none" : `4px solid #fff`,
    width: 64,
    height: $noBorders ? 55 : 64,
    position: "relative",
    overflow: "hidden",
    borderTopRightRadius: $noBorders ? "0%" : "50%",
    borderTopLeftRadius: $noBorders ? "0%" : "50%",
    borderBottomLeftRadius: $noBorders ? "0%" : "50%",
    backgroundSize: "80px 64px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: $noBorders ? theme.spacing(2) : 0,
  }),
);
