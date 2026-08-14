import {create} from "zustand";

export const useCitiesByCountryStore = create((set) => ({
    citiesbycountry: 0,
    setCitiesByCountry: (newCitiesByCountry) => set({ citiesbycountry: newCitiesByCountry }),
}));