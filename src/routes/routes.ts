import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
import { Album } from "../pages/album";
import { Repetidas } from "../pages/repetidas";
import { EquipePage } from "../pages/equipe";

export const router = createBrowserRouter([
  { index: true, Component: Home },
  {
    Component: Album,
    path: "/album",
  },
  {
    Component: Repetidas,
    path: "/repetidas",
  },
  {
    Component: EquipePage,
    path: "/equipe/:code",
  },
]);
