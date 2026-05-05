import type { Team } from "./../../types/team";

export interface CountriesStore {
  countries: Team[];
  isLoading: boolean;
  selectedCountry: Team;

  fetchCountries: () => Promise<void>;
  getCountryByCode: (code: string) => Team | undefined;
  selectCountry: (team: Team) => Team;
}
