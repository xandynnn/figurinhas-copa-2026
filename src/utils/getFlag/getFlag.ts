import mexIconFlag from "../../assets/flag-mex.png";

const countryImages: Record<string, string> = {
  MEX: mexIconFlag,
};

export const getFlagImage = (code: string) => {
  return countryImages[code];
};
