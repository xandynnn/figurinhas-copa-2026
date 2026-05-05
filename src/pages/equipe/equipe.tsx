import { useParams } from "react-router";
import { Page } from "../../components/page";
import { Controls } from "../../components/controls";
import { EquipePageContainer } from "./equipe.styles";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { clarityColor } from "../../utils/opacity";

export const EquipePage = () => {
  const params = useParams();
  const code = params.code?.toUpperCase();

  const isLoading = useCountriesStore((s) => s.isLoading);
  const getCountryByCode = useCountriesStore((s) => s.getCountryByCode);
  const country = getCountryByCode(code || "");

  if (!code) {
    return <div>Equipe not found</div>;
  }

  if (isLoading || !country) {
    return <div>Loading...</div>;
  }

  const tertiaryColor =
    country.colors.tertiary?.toLowerCase() === "#ffffff" ||
    country.colors.tertiary === null
      ? clarityColor(country.colors.primary, 30)
      : country.colors.tertiary || "#000";

  return (
    <EquipePageContainer
      $primary={country.colors.primary}
      $secondary={country.colors.secondary}
      $tertiary={tertiaryColor}
    >
      <Page country={country} />
      <Controls />
    </EquipePageContainer>
  );
};
