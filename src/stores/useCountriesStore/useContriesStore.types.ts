import type { Team } from "./../../types/team";

export interface CountriesStore {
  countries: Team[];
  isLoading: boolean;

  fetchCountries: () => Promise<void>;
  getCountryByCode: (code: string) => Team | undefined;
}
