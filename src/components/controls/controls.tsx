import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { ControlsContainer } from "./controls.styles";

export const Controls = () => {
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
          value="mex"
        >
          <MenuItem value="mex">México</MenuItem>
          <MenuItem value="rsa">África do Sul</MenuItem>
          <MenuItem value="kor">Coreia do Sul</MenuItem>
          <MenuItem value="cze">República Tcheca</MenuItem>
        </Select>
      </FormControl>

      <Button>Anterior</Button>
      <Button>Próximo</Button>
      <PieChart
        sx={{ flex: 0 }}
        series={[{ outerRadius: 40, data, arcLabel: "value" }]}
        {...settings}
      />
    </ControlsContainer>
  );
};
