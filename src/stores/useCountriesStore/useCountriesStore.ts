/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "../../services/api";
import type { CountriesStore } from "./useContriesStore.types";
import type { Team } from "../../types/team";
import { countries } from "../../mocks/countries.json";

export const useCountriesStore = create<CountriesStore>()(
  persist(
    (set, get) => ({
      countries: [],
      selectedCountry: countries[0] || null,
      isLoading: false,
      collection: {},

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

      selectCountry: (team: Team) => {
        set({ selectedCountry: team });
        return team;
      },

      addSticker: (id) =>
        set((state) => ({
          collection: {
            ...state.collection,
            [id]: (state.collection[id] || 0) + 1,
          },
        })),

      removeSticker: (id) =>
        set((state) => {
          const count = state.collection[id] || 0;

          if (count <= 1) {
            const { [id]: __, ...rest } = state.collection;
            return { collection: rest };
          }

          return {
            collection: {
              ...state.collection,
              [id]: count - 1,
            },
          };
        }),
    }),
    {
      name: "album-storage",
      partialize: (state) => ({
        collection: state.collection,
        selectedCountry: state.selectedCountry,
      }),
    },
  ),
);
