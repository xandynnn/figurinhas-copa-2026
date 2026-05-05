import { useParams } from "react-router";
import { Page } from "../../components/page";
import { Controls } from "../../components/controls";
import { EquipePageContainer } from "./equipe.styles";

export const EquipePage = () => {
  const params = useParams();
  const code = params.code;

  if (!code) {
    return <div>Equipe not found</div>;
  }

  return (
    <EquipePageContainer
      $primary="#006847"
      $secondary="#FFFFFF"
      $terciary="#CE1126"
    >
      <Page />
      <Controls />
    </EquipePageContainer>
  );
};
