import {
  Typography,
  LinearProgress,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
  FormControl,
} from "@mui/material";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { BoxHome, ProgressBox, ProgressInfo } from "./home.styles";
import { useNavigate } from "react-router";
import logo from "../../assets/logo-copa-iguaba-tem.png";
import { motion } from "framer-motion";
import { sortTeamsAlphabetically } from "../../utils/sort";
import {
  cocaColaObject,
  fifaObject,
} from "../../components/controls/controls.utils";
import { InstallButton } from "../../components/installButton";

export const Home = () => {
  const navigate = useNavigate();
  const collection = useCountriesStore((state) => state.collection);
  const countries = useCountriesStore((state) => state.countries);
  const setCountry = useCountriesStore((e) => e.selectCountry);

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

  const sortedCountries = sortTeamsAlphabetically(countries);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const value = e.target.value;

    if (value === "CC") {
      setCountry(cocaColaObject);
      navigate(`/album/especial/CC`);
    } else if (value === "FWC") {
      setCountry(fifaObject);
      navigate(`/album/${value}`);
    } else {
      const filterSelectedCountry = countries.filter(
        (c) => c.code === value,
      )[0];
      setCountry(filterSelectedCountry);
      navigate(`/album/equipe/${value}`);
    }
  };

  return (
    <BoxHome>
      {/* Logo */}
      <motion.img
        src={logo}
        alt="IguabaTem Album"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{
          width: 180,
          zIndex: 2,
          marginBottom: 24,
        }}
      />

      <ProgressBox>
        <Typography variant="body1" sx={{ mb: 1, fontWeight: 700 }}>
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
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {collected} / {total}
          </Typography>

          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            {percentage}%
          </Typography>
        </ProgressInfo>
      </ProgressBox>

      <FormControl fullWidth>
        <InputLabel id="team-select-label">Escolha uma página</InputLabel>
        <Select
          labelId="team-select-label"
          id="team-select"
          label="Seleção"
          value={""}
          onChange={handleSelectChange}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <MenuItem value="FWC">Fifa World Cup</MenuItem>
          {sortedCountries.map((c) => (
            <MenuItem key={c.code} value={c.code}>
              {c.name}
            </MenuItem>
          ))}
          <MenuItem value="CC">Coca-Cola</MenuItem>
        </Select>
      </FormControl>
      <InstallButton />
    </BoxHome>
  );
};
