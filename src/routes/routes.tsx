import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
import { Album } from "../pages/album";
import { Repetidas } from "../pages/repetidas";
import { CcPage, FwcPage, TeamPage } from "./pages";

export const router = createBrowserRouter([
  { index: true, Component: Home },
  {
    path: "/album",
    Component: Album,
    children: [
      {
        path: "equipe/:code",
        Component: TeamPage,
      },
      {
        path: "especial/CC",
        Component: CcPage,
      },
      {
        path: "FWC",
        Component: FwcPage,
      },
    ],
  },
  {
    Component: Repetidas,
    path: "/repetidas",
  },
]);
