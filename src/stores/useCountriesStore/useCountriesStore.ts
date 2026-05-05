import { create } from "zustand";
import { api } from "../../services/api";
import type { CountriesStore } from "./useContriesStore.types";

export const useCountriesStore = create<CountriesStore>((set, get) => ({
  countries: [],
  isLoading: false,

  fetchCountries: async () => {
    if (get().countries.length > 0) return;

    try {
      set({ isLoading: true });

      const data = await api.getCountries();

      set({
        countries: data,
        isLoading: false,
      });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },

  getCountryByCode: (code: string) => {
    return get().countries.find((c) => c.code === code);
  },
}));
