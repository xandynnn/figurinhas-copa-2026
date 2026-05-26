import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { Stack, Typography } from "@mui/material";
import type { CongratulationsCardProps } from "./congratulationsCard.types";
import {
  BoxEmoji,
  CircleIcon,
  CongratsCard,
  Title,
  Text,
} from "./congratulationsCard.styles";

export const CongratulationsCard = ({ teamName }: CongratulationsCardProps) => {
  return (
    <CongratsCard elevation={6}>
      <BoxEmoji>
        <EmojiEventsIcon sx={{ fontSize: 180 }} />
      </BoxEmoji>

      <Stack spacing={3} sx={{ alignItems: "center" }}>
        <CircleIcon />

        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Parabéns! 🎉
        </Typography>

        <Title variant="h6">
          {teamName
            ? `Você completou a coleção da seleção do ${teamName}!`
            : "Você completou essa coleção!"}
        </Title>

        <Text variant="body1">
          Todas as figurinhas dessa seleção já foram preenchidas.
        </Text>
      </Stack>
    </CongratsCard>
  );
};
