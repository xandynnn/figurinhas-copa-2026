import { useParams } from "react-router";
import { Page } from "../../components/page";
import { Controls } from "../../components/controls";
import { EquipePageContainer } from "./equipe.styles";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { clarityColor } from "../../utils/opacity";
import type { PageType } from "../../components/page/page.types";
import { Toolbar } from "@mui/material";

interface EquipePageProps {
  type: PageType;
}

export const EquipePage = ({ type }: EquipePageProps) => {
  const params = useParams();
  const code = params.code?.toUpperCase();

  const isLoading = useCountriesStore((s) => s.isLoading);
  const getCountryByCode = useCountriesStore((s) => s.getCountryByCode);
  const country = getCountryByCode(code || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (type === "TEAM" && (!code || !country)) {
    return <div>Equipe não encontrada</div>;
  }

  const primaryColor =
    type === "FWC"
      ? "#d4af37"
      : type === "CC"
        ? "#c40000"
        : country!.colors.primary;

  const secondaryColor =
    type === "FWC"
      ? "#d4af37"
      : type === "CC"
        ? "#c40000"
        : country!.colors.secondary;

  const tertiaryColor =
    type === "TEAM"
      ? country!.colors.tertiary?.toLowerCase() === "#ffffff" ||
        country!.colors.tertiary === null
        ? clarityColor(country!.colors.primary, 30)
        : country!.colors.tertiary || "#000"
      : clarityColor(primaryColor, 30);

  return (
    <EquipePageContainer
      $primary={primaryColor}
      $secondary={secondaryColor}
      $tertiary={tertiaryColor}
    >
      <Controls countryCode={country?.code} type={type} />
      <Toolbar />
      <Page country={country} type={type} />
    </EquipePageContainer>
  );
};
