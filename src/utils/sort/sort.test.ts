import { describe, it, expect } from "vitest";
import { sortTeamsAlphabetically } from "./sort";
import type { Team } from "../../types/team";

describe("sortTeamsAlphabetically", () => {
  it("should sort teams alphabetically by name", () => {
    const teams: Team[] = [
      {
        id: 1,
        name: "Brasil",
        code: "BRA",
        colors: {
          primary: "#000000",
          secondary: "#FFFFFF",
          tertiary: "#009B3A",
        },
      },
      {
        id: 2,
        name: "Argentina",
        code: "ARG",
        colors: {
          primary: "#0039A6",
          secondary: "#FFFFFF",
          tertiary: "#FFD700",
        },
      },
      {
        id: 3,
        name: "Colômbia",
        code: "COL",
        colors: {
          primary: "#FF0000",
          secondary: "#FFFFFF",
          tertiary: "#002B7F",
        },
      },
    ];

    const sortedTeams = sortTeamsAlphabetically(teams);

    expect(sortedTeams[0].name).toBe("Argentina");
    expect(sortedTeams[1].name).toBe("Brasil");
    expect(sortedTeams[2].name).toBe("Colômbia");
  });

  it("should return empty when the param is empty", () => {
    const teams: Team[] = [];
    const sortedTeams = sortTeamsAlphabetically(teams);
    expect(sortedTeams).toEqual([]);
  });
});
