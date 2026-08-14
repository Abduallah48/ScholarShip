import { create } from "zustand";

export const useFiltersStore = create((set) => ({
    display: {
       country: "البلد",
       category: "التخصص",
       degree: "الدرجة العلمية",
       finance: "التمويل",
   },

   filters: {
       country_id: null,
       category_id: null,
       degree_id: null,
       finance_id: null
   },

    currentPage: 1,
    

    setPage: (page) => set({currentPage: page}),

    setCountry: (countryId, countryName) => {
       set((state) => ({filters: {...state.filters, country_id: countryId},
                        display: {...state.display, country: countryName || "البلد"},
                        currentPage: 1
                       }))
    },
    setCategory: (categoryID, categoryName) => {
       set((state) => ({filters: {...state.filters, category_id: categoryID},
                        display: {...state.display, category: categoryName || "التخصص"},
                        currentPage: 1
                       }))
    },
    setDegree: (degreeID, degreeName) => {
       set((state) => ({filters: {...state.filters, degree_id: degreeID},
                        display: {...state.display, degree: degreeName || "الدرجة العلمية"},
                        currentPage: 1
                       }))
    },
    setFinance: (financeID, financeName) => {
       set((state) => ({filters: {...state.filters, finance_id: financeID},
                        display: {...state.display, finance: financeName || "التمويل"},
                        currentPage: 1
                       }))
    },

    resetFilters: () => {
       set({filters: {country_id: null, category_id: null, degree_id: null, finance_id: null},
            display: {country: "البلد", category: "التخصص", degree: "الدرجة العلمية", finance: "التمويل"},
            currentPage: 1
           })
    }
}))