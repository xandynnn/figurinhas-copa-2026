import CircularProgress, {
  type CircularProgressProps,
} from "@mui/material/CircularProgress";
import { BoxCircularProgress, BoxLabel, Label } from "./progress.styles";
import { Tooltip } from "@mui/material";

export const CircularProgressWithLabel = (
  props: CircularProgressProps & {
    value: number;
    countryName: string;
    percentage: number;
  },
) => {
  return (
    <Tooltip
      arrow
      title={`${props.percentage}% da Página ${props.countryName} completa`}
    >
      <BoxCircularProgress>
        <CircularProgress
          variant="determinate"
          aria-label="Upload photos"
          {...props}
        />
        <BoxLabel>
          <Label variant="caption">{`${Math.round(props.value)}%`}</Label>
        </BoxLabel>
      </BoxCircularProgress>
    </Tooltip>
  );
};
