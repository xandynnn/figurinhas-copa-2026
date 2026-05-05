import data from "../../mocks/countries.json";
import type { Team } from "../../types/team";

export const getCountries = async () => {
  const promise = new Promise<Team[]>((resolve) => {
    setTimeout(() => {
      resolve(data.countries);
    }, 200);
  });

  return promise;
};

export const api = { getCountries };
