import { useCountriesStore } from "../../stores/useCountriesStore";
import { clarityColor } from "../../utils/opacity";
import { Card } from "../card/card";
import { CongratulationsCard } from "../congratulationsCard";
import { Title } from "../title";
import { PageContainer, Side } from "./page.styles";
import type { PageProps, Sticker } from "./page.types";

const generateFWCStickers = (): Sticker[] => {
  const special: Sticker = {
    id: "FWC_0",
    number: 0,
    label: "FWC",
  };

  const fwc: Sticker[] = Array.from({ length: 19 }, (_, i) => ({
    id: `FWC_${i + 1}`,
    number: i + 1,
    label: "FWC",
  }));

  return [special, ...fwc];
};

const generateCCStickers = () => {
  return Array.from({ length: 14 }, (_, i) => ({
    id: `CC_${i + 1}`,
    number: i + 1,
    label: "CC",
  }));
};

const generateTeamStickers = (teamCode: string) => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: `TEAM_${teamCode}_${i + 1}`,
    number: i + 1,
    label: teamCode,
  }));
};

export const Page = ({ country, type }: PageProps) => {
  const collection = useCountriesStore((s) => s.collection);
  const isSectionCompleted = useCountriesStore(
    (state) => state.isSectionCompleted,
  );

  const sectionCode =
    type === "TEAM" ? country?.code || "" : type === "FWC" ? "FWC" : "CC";

  const isCompleted = isSectionCompleted(sectionCode);

  let slots: Sticker[] = [];

  if (type === "TEAM" && country) {
    slots = generateTeamStickers(country.code);
  }

  if (type === "FWC") {
    slots = generateFWCStickers();
  }

  if (type === "CC") {
    slots = generateCCStickers();
  }

  const primary = country?.colors.primary || "#222";
  const tertiaryColor =
    country?.colors.tertiary?.toLowerCase() === "#ffffff" ||
    country?.colors.tertiary === null
      ? clarityColor(primary, 30)
      : country?.colors.tertiary || "#000";

  const ccDivision = type === "CC" ? 7 : 10;
  const division = type === "FWC" ? 11 : ccDivision;

  const left = slots.slice(0, division);
  const right = slots.slice(division, 20);

  return (
    <PageContainer container>
      <Side size={{ xs: 12, md: 6 }} container>
        {country && (
          <Title
            countryName={country.name}
            countryCode={country.code}
            primaryColor={country.colors.primary}
            tertiaryColor={tertiaryColor}
          />
        )}

        {isCompleted && <CongratulationsCard teamName={country?.name || ""} />}

        {left.map((sticker) => (
          <Card
            key={sticker.id}
            id={sticker.id}
            backgroundColor={primary}
            code={sticker.label}
            number={sticker.number}
            quantity={collection[sticker.id] || 0}
          />
        ))}
      </Side>

      <Side size={{ xs: 12, md: 6 }} container>
        {right.map((sticker) => (
          <Card
            key={sticker.id}
            id={sticker.id}
            backgroundColor={primary}
            code={sticker.label}
            number={sticker.number}
            quantity={collection[sticker.id] || 0}
          />
        ))}
      </Side>
    </PageContainer>
  );
};
