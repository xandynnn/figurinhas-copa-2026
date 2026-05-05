import type { Team } from "../../types/team";

export function sortTeamsAlphabetically(teams: Team[]): Team[] {
  return [...teams].sort((a, b) =>
    a.name.localeCompare(b.name, "pt-BR", { sensitivity: "base" }),
  );
}
