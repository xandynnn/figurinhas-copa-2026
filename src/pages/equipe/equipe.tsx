import { useParams } from "react-router";
import { Title } from "../../components/title";
import { Grid } from "@mui/material";

export const EquipePage = () => {
  const params = useParams();
  const code = params.code;

  if (!code) {
    return <div>Equipe not found</div>;
  }

  return (
    <Grid container spacing={2} sx={{ backgroundColor: "red" }}>
      <Grid size={6}>
        <Title countryName={code} />
      </Grid>
      <Grid size={6}>teste </Grid>
    </Grid>
  );
};
