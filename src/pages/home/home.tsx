import { Typography, LinearProgress } from "@mui/material";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { BoxHome, ProgressBox, ProgressInfo } from "./home.styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { fifaObject } from "../../components/controls/controls.utils";

export const Home = () => {
  const navigate = useNavigate();
  const collection = useCountriesStore((state) => state.collection);
  const countries = useCountriesStore((state) => state.countries);
  const setSelectCountry = useCountriesStore((state) => state.selectCountry);

  const teamIds = countries.flatMap((c) =>
    Array.from({ length: 20 }, (_, i) => `TEAM_${c.code}_${i + 1}`),
  );

  const fwcIds = [
    "FWC_0",
    ...Array.from({ length: 19 }, (_, i) => `FWC_${i + 1}`),
  ];
  const ccIds = Array.from({ length: 14 }, (_, i) => `CC_${i + 1}`);
  const allIds = [...teamIds, ...fwcIds, ...ccIds];
  const collected = allIds.filter((id) => (collection[id] || 0) > 0).length;
  const total = allIds.length;
  const percentage = Math.round((collected / total) * 100);

  const handleClickToAlbum = () => {
    setSelectCountry(fifaObject);
    navigate("/album/fwc");
  };

  return (
    <BoxHome>
      <Typography variant="h3" sx={{ fontWeight: 700, textAlign: "center" }}>
        Álbum da Copa 2026
        <br />
        IguabaTem.com
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Bem-vindo à sua cola digital de figurinhas
      </Typography>

      <ProgressBox>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Progresso geral
        </Typography>

        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{
            height: 20,
            borderRadius: 2,
          }}
        />

        <ProgressInfo>
          <Typography variant="body2">
            {collected} / {total}
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {percentage}%
          </Typography>
        </ProgressInfo>
      </ProgressBox>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        onClick={handleClickToAlbum}
      >
        Ir para o Álbum
      </Button>
    </BoxHome>
  );
};
