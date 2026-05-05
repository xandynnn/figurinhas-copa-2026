import { FlagContainer } from "./flagImage.styles";
import type { FlagProps } from "./flagImage.types";

export const FlagImage = ({ image, noBorders }: FlagProps) => {
  return (
    <FlagContainer
      $noBorders={noBorders}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};
