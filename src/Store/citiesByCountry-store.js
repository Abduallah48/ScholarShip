// 📁 Store/citiesByCountry-store.js
import { create } from "zustand";

export const useCitiesByCountryStore = create((set) => ({
    selectedCountryId: null,
    setSelectedCountryId: (id) => set({ selectedCountryId: id }),
}));