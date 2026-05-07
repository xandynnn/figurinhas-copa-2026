import type { Team } from "../../types/team";

export interface PageProps {
  country?: Team;
  type: PageType;
}

export type PageType = "TEAM" | "FWC" | "CC";

export interface Sticker {
  id: string;
  number: number;
  label: string;
}
