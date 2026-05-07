import { Grid, useTheme, useMediaQuery } from "@mui/material";
import type { TitleProps } from "./title.types";
import {
  BoxDesktop,
  BoxMobile,
  BoxTitle,
  CountryName,
  WeAreText,
} from "./title.styles";
import { getFlagImage } from "../../utils/getFlag";
import { FlagImage } from "../flagImage";

export const Title = ({
  countryName,
  countryCode,
  primaryColor,
  tertiaryColor,
}: TitleProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const flagImage = getFlagImage(countryCode);
  return (
    <Grid size={{ xs: 12, md: 6 }} sx={{ padding: "8px" }} container>
      <BoxTitle>
        <BoxMobile>
          <WeAreText variant="h1" $color={primaryColor}>
            We are
          </WeAreText>
          {flagImage && isMobile && <FlagImage image={flagImage!} />}
        </BoxMobile>
        <BoxDesktop>
          <CountryName variant="h2" $color={tertiaryColor}>
            {countryName}
          </CountryName>
          {flagImage && !isMobile && <FlagImage image={flagImage!} />}
        </BoxDesktop>
      </BoxTitle>
    </Grid>
  );
};
