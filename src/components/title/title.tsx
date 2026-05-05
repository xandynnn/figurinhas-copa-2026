import { Box, Typography } from "@mui/material";
import type { TitleProps } from "./title.types";

export const Title = ({ countryName }: TitleProps) => {
  return (
    <Box>
      <Typography variant="h2" component="h2">
        We are
      </Typography>
      <Typography variant="h1" component="h1">
        {countryName}
      </Typography>
    </Box>
  );
};
