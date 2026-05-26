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
      filterMissing: false,

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

      setFilterMissing: () =>
        set((state) => ({ filterMissing: !state.filterMissing })),

      isSectionCompleted: (code: string) => {
        const state = get();

        const teamCode = code?.toUpperCase?.() ?? code;
        if (!teamCode) return false;

        const team = state.countries.find((c) => c.code === teamCode);
        if (team) {
          const total = 20;
          const ids = Array.from(
            { length: total },
            (_, i) => `TEAM_${teamCode}_${i + 1}`,
          );
          const collected = ids.filter(
            (id) => (state.collection[id] || 0) > 0,
          ).length;
          return collected === total;
        }

        if (teamCode === "FWC") {
          const ids = [
            "FWC_0",
            ...Array.from({ length: 19 }, (_, i) => `FWC_${i + 1}`),
          ];
          return ids.every((id) => (state.collection[id] || 0) > 0);
        }

        if (teamCode === "CC") {
          const ids = Array.from({ length: 14 }, (_, i) => `CC_${i + 1}`);
          return ids.every((id) => (state.collection[id] || 0) > 0);
        }

        return false;
      },
    }),
    {
      name: "album-storage",
      partialize: (state) => ({
        collection: state.collection,
        selectedCountry: state.selectedCountry,
        filterMissing: state.filterMissing,
      }),
    },
  ),
);
