/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useCountriesStore } from "./stores/useCountriesStore";
import { SplashScreen } from "./components/splashScreen";

export const AppRoot = () => {
  const fetchCountries = useCountriesStore((s) => s.fetchCountries);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
};
