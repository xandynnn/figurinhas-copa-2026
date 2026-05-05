import { Card } from "../card/card";
import { Title } from "../title";
import { PageContainer, Side } from "./page.styles";

export const Page = () => {
  return (
    <PageContainer container>
      <Side size={6} container>
        <Title
          countryName="México"
          countryCode="MEX"
          primaryColor="#006847"
          terciaryColor="#CE1126"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Card
            key={i + 1}
            backgroundColor="#006847"
            code="MEX"
            number={i + 1}
            quantity={0}
          />
        ))}
      </Side>
      <Side size={6} container>
        {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((i) => (
          <Card
            key={i + 1}
            backgroundColor="#006847"
            code="MEX"
            number={i + 1}
            quantity={0}
          />
        ))}
      </Side>
    </PageContainer>
  );
};
