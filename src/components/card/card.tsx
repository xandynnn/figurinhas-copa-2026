import { useState } from "react";
import { Badge, Box, IconButton, Tooltip } from "@mui/material";
import {
  CardCode,
  CardContainer,
  CardNumber,
  BoxCard,
  CardControlGroup,
} from "./card.styles";
import { IoIdCardOutline } from "react-icons/io5";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import type { CardProps } from "./card.types";

export const Card = ({
  backgroundColor,
  code,
  number,
  quantity = 0,
}: CardProps) => {
  const [qtd, setQtd] = useState(quantity);

  return (
    <>
      {number === 18 && <CardContainer size={3} container />}

      <CardContainer size={number === 13 ? 6 : 3} container>
        <BoxCard $backgroundColor={backgroundColor} $quantity={qtd}>
          {qtd > 0 && <IoIdCardOutline size={60} color="#fff" />}

          {qtd === 0 && <CardCode>{code}</CardCode>}
          <CardNumber>{number}</CardNumber>

          <CardControlGroup>
            <Box>
              {qtd > 0 && (
                <Tooltip
                  title={`${qtd - 1} figurinhas repetidas`}
                  placement="top"
                  arrow
                >
                  <Badge badgeContent={qtd - 1} color="primary">
                    <IoIdCardOutline size={32} color="#fff" />
                  </Badge>
                </Tooltip>
              )}
            </Box>
            <Box>
              {qtd !== 0 && (
                <IconButton
                  aria-label="remove card"
                  color="primary"
                  onClick={() => {
                    setQtd(Math.max(qtd - 1, 0));
                  }}
                >
                  <RemoveIcon sx={{ color: "#fff" }} />
                </IconButton>
              )}

              <IconButton
                aria-label="remove card"
                color="primary"
                onClick={() => {
                  setQtd(qtd + 1);
                }}
              >
                <AddIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
          </CardControlGroup>
        </BoxCard>
      </CardContainer>
    </>
  );
};
