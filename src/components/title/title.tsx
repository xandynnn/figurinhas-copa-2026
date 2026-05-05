import { Grid } from "@mui/material";
import type { TitleProps } from "./title.types";
import { BoxTitle, CountryName, WeAreText } from "./title.styles";
import { getFlagImage } from "../../utils/getFlag";
import { FlagImage } from "../flagImage";

export const Title = ({
  countryName,
  countryCode,
  primaryColor,
  terciaryColor,
}: TitleProps) => {
  return (
    <Grid size={6} sx={{ padding: "8px" }} container>
      <BoxTitle>
        <WeAreText variant="h1" $color={primaryColor}>
          We are
        </WeAreText>
        <CountryName variant="h2" $color={terciaryColor}>
          {countryName}
        </CountryName>

        {getFlagImage(countryCode) && (
          <FlagImage image={getFlagImage(countryCode)!} noBorders />
        )}
      </BoxTitle>
    </Grid>
  );
};
