import CircularProgress from "@mui/material/CircularProgress";
import type { LoadingProps } from "./loading.types";
import { Box } from "@mui/material";
import { FullHeightBox } from "./loading.styles";

export const Loading = ({ fullHeight = false }: LoadingProps) => {
  const renderLoading = (
    <Box sx={{ width: 80, height: 80 }}>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        aria-label="Loading…"
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        size={80}
      />
    </Box>
  );

  return fullHeight ? (
    <FullHeightBox>{renderLoading}</FullHeightBox>
  ) : (
    renderLoading
  );
};
