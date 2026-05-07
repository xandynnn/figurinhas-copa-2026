import type { Team } from "./../../types/team";

export interface CountriesStore {
  countries: Team[];
  isLoading: boolean;
  selectedCountry: Team;
  collection: Record<string, number>;

  fetchCountries: () => Promise<void>;
  getCountryByCode: (code: string) => Team | undefined;
  selectCountry: (team: Team) => Team;

  addSticker: (stickerId: string) => void;
  removeSticker: (stickerId: string) => void;
}
