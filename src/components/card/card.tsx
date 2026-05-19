import {
  Badge,
  Box,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  CardCode,
  CardContainer,
  CardNumber,
  BoxCard,
  CardControlGroup,
  BoxGroupButton,
  BoxToolTipMobile,
  BoxToolTipDesktop,
} from "./card.styles";
import { IoIdCardOutline } from "react-icons/io5";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCountriesStore } from "../../stores/useCountriesStore";
import type { CardProps } from "./card.types";
import { FWC_SPECIAL_POSITIONS } from "./card.utils";

export const Card = ({
  id,
  backgroundColor,
  code,
  number,
  quantity = 0,
  repeatedFormat,
}: CardProps) => {
  const addSticker = useCountriesStore((s) => s.addSticker);
  const removeSticker = useCountriesStore((s) => s.removeSticker);
  const filterMissing = useCountriesStore((e) => e.filterMissing);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const stickerId = id;
  const qtd = quantity;
  const shouldShowCode = isMobile || qtd === 0;

  const teamCardSize = number === 13 && code !== "CC" ? 6 : 3;
  const containerCardSize =
    code === "FWC" && FWC_SPECIAL_POSITIONS.includes(number) ? 6 : teamCardSize;

  return (
    <>
      {number === 18 && !isMobile && <CardContainer size={3} container />}

      {(!isMobile || !filterMissing || quantity === 0) && (
        <CardContainer size={{ xs: 12, md: containerCardSize }} container>
          <BoxCard $backgroundColor={backgroundColor} $quantity={qtd}>
            {qtd > 0 && (
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <IoIdCardOutline size={60} color="#fff" />
              </Box>
            )}

            {qtd > 0 && (
              <BoxToolTipMobile>
                <Tooltip
                  title={`${qtd - 1} figurinhas repetidas`}
                  placement="top"
                  arrow
                >
                  <Badge badgeContent={qtd - 1} color="error">
                    <IoIdCardOutline size={32} color="#000" />
                  </Badge>
                </Tooltip>
              </BoxToolTipMobile>
            )}

            {shouldShowCode && (
              <CardCode>{code === "FWC" && number === 0 ? "" : code}</CardCode>
            )}

            <CardNumber>
              {isMobile && "_"}
              {number === 0 && code === "FWC" ? "00" : number}
            </CardNumber>

            <CardControlGroup>
              <BoxToolTipDesktop>
                {qtd > 0 && (
                  <Tooltip
                    title={`${qtd - 1} figurinhas repetidas`}
                    placement="top"
                    arrow
                  >
                    <Badge badgeContent={qtd - 1} color="error">
                      <IoIdCardOutline size={32} color="#fff" />
                    </Badge>
                  </Tooltip>
                )}
              </BoxToolTipDesktop>

              <BoxGroupButton>
                {qtd !== 0 && (
                  <IconButton
                    aria-label="remove card"
                    color="primary"
                    size="small"
                    sx={{ border: "2px solid #fff" }}
                    onClick={() => removeSticker(stickerId)}
                  >
                    <RemoveIcon sx={{ color: "#fff" }} />
                  </IconButton>
                )}

                {!repeatedFormat && (
                  <IconButton
                    aria-label="add card"
                    color="primary"
                    size="small"
                    sx={{ border: "2px solid #fff" }}
                    onClick={() => addSticker(stickerId)}
                  >
                    <AddIcon sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </BoxGroupButton>
            </CardControlGroup>
          </BoxCard>
        </CardContainer>
      )}
    </>
  );
};
