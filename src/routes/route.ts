import { createBrowserRouter } from "react-router";
import { Home } from "../pages/home";
import { Album } from "../pages/album";
import { Repetidas } from "../pages/repetidas";

createBrowserRouter([
  { index: true, Component: Home },
  {
    Component: Album,
    path: "/album",
  },
  {
    Component: Repetidas,
    path: "/repetidas",
  }
]);