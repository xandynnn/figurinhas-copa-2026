import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { ControlsContainer } from "./controls.styles";
import { useCountriesStore } from "../../stores/useCountriesStore";
import { useNavigate } from "react-router";

export const Controls = () => {
  const countries = useCountriesStore((e) => e.countries);
  const navigate = useNavigate();
  const selectedCountry = useCountriesStore((e) => e.selectedCountry);
  const setCountry = useCountriesStore((e) => e.selectCountry);

  const handleSelectChange = (e: SelectChangeEvent) => {
    const value = e.target.value;
    const filterSelectedCountry = countries.filter((c) => c.code === value)[0];
    setCountry(filterSelectedCountry);
    navigate(`/equipe/${value}`);
  };

  const handleNext = () => {
    const next =
      selectedCountry.id + 1 <= 48
        ? selectedCountry.id + 1
        : selectedCountry.id;
    const filterSelectedCountry = countries.filter((c) => c.id === next)[0];
    setCountry(filterSelectedCountry);
    navigate(`/equipe/${filterSelectedCountry.code}`);
  };

  const handlePrev = () => {
    const prev =
      selectedCountry.id - 1 >= 1 ? selectedCountry.id - 1 : selectedCountry.id;
    const filterSelectedCountry = countries.filter((c) => c.id === prev)[0];
    setCountry(filterSelectedCountry);
    navigate(`/equipe/${filterSelectedCountry.code}`);
  };

  const data = [
    { label: "Presentes", value: 10, color: "#00C49F" },
    { label: "Faltantes", value: 10, color: "#f1f1f1" },
  ];

  const settings = {
    margin: { right: 5 },
    width: 80,
    height: 44,
    hideLegend: true,
  };

  return (
    <ControlsContainer>
      <FormControl>
        <InputLabel id="team-select-label">Seleção</InputLabel>
        <Select
          labelId="team-select-label"
          id="team-select"
          label="Seleção"
          value={selectedCountry?.code}
          onChange={handleSelectChange}
        >
          {countries.map((c) => (
            <MenuItem key={c.code} value={c.code}>
              {c.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handlePrev}
        disabled={selectedCountry.id <= 1}
      >
        Anterior
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={selectedCountry.id >= 48}
      >
        Próximo
      </Button>
      <PieChart
        sx={{ flex: 0 }}
        series={[{ outerRadius: 40, data, arcLabel: "value" }]}
        {...settings}
      />
    </ControlsContainer>
  );
};
