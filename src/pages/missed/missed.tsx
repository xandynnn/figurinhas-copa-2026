import { useMemo } from "react";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { Card } from "../../components/card/card";
import { Container, CountryName } from "./missed.styles";
import { Controls, FlagImage } from "../../components";
import { Toolbar } from "@mui/material";
import { getFlagImage } from "../../utils/getFlag";

export const MissedPage = () => {
  const { countries, collection } = useCountriesStore();

  const missingByCountry = useMemo(() => {
    return countries
      .map((country) => {
        const stickers = Array.from(
          { length: 20 },
          (_, i) => `TEAM_${country.code}_${i + 1}`,
        );

        const missing = stickers.filter((id) => (collection[id] || 0) === 0);

        return {
          country,
          missing,
        };
      })
      .filter(({ missing }) => missing.length > 0); // <-- remove seleções completas
  }, [countries, collection]);

  return (
    <Container>
      <Controls countryCode="FWC" type="FWC" mode="missing" />
      <Toolbar />

      {missingByCountry.map(({ country, missing }) => (
        <div key={country.code}>
          <CountryName>
            <FlagImage image={getFlagImage(country.code)} />{" "}
            <span>{country.name}</span>
          </CountryName>

          {missing.length >= 1 && (
            <>
              {missing.map((id) => (
                <Card
                  key={id}
                  number={parseInt(id.split("_").slice(-1)[0], 10)}
                  code={country.code}
                  id={id}
                  quantity={0}
                  backgroundColor={country.colors.primary}
                />
              ))}
            </>
          )}
        </div>
      ))}
    </Container>
  );
};
