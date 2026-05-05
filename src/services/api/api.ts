import countries from "../../mocks/countries.json";

export const getCountries = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(countries);
    }, 200);
  });

  return promise;
};

export const api = { getCountries };
