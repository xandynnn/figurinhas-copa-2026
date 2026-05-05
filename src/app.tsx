/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useCountriesStore } from "./stores/useCountriesStore";

export const AppRoot = () => {
  const fetchCountries = useCountriesStore((s) => s.fetchCountries);

  useEffect(() => {
    fetchCountries();
  }, []);

  return <RouterProvider router={router} />;
};
