import { clarityColor } from "../../utils/opacity";
import { Card } from "../card/card";
import { Title } from "../title";
import { PageContainer, Side } from "./page.styles";
import type { PageProps } from "./page.types";

export const Page = ({ country }: PageProps) => {
  const tertiaryColor =
    country.colors.tertiary?.toLowerCase() === "#ffffff" ||
    country.colors.tertiary === null
      ? clarityColor(country.colors.primary, 30)
      : country.colors.tertiary || "#000";

  return (
    <PageContainer container>
      <Side size={6} container>
        <Title
          countryName={country.name}
          countryCode={country.code}
          primaryColor={country.colors.primary}
          tertiaryColor={tertiaryColor}
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Card
            key={i + 1}
            backgroundColor={country.colors.primary}
            code="MEX"
            number={i + 1}
            quantity={0}
          />
        ))}
      </Side>
      <Side size={6} container>
        {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
          <Card
            key={i + 1}
            backgroundColor={country.colors.primary}
            code="MEX"
            number={i + 1}
            quantity={0}
          />
        ))}
      </Side>
    </PageContainer>
  );
};
