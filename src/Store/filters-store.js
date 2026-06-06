import { create } from "zustand";

export const useFiltersStore = create((set) => ({

    country: "البلد",
    category: "التخصص",
    degree: "الدرجة العلمية",
    finance: "التمويل",

    currentPage: 1,
    selectedCountry: 0,
    selectedCategory: 0,
    selectedDegree: "",
    selectedFinance: "",

    setPage: (page) => set({currentPage: page}),
    setCountry: (country) => {if(country === "إيطاليا")
                                     set({selectedCountry: 1, country: country ,currentPage: 1})
                              if(country === "ألمانيا")
                                     set({selectedCountry: 2, country: country ,currentPage: 1})
                              if(country === "روسيا")
                                     set({selectedCountry: 3, country: country ,currentPage: 1})
                              if(country === "رومانيا")
                                     set({selectedCountry: 4, country: country ,currentPage: 1})
                              if(country === "هنغاريا")
                                     set({selectedCountry: 5, country: country ,currentPage: 1})
                              if(country === "تركيا")
                                     set({selectedCountry: 6, country: country ,currentPage: 1})        
                            },
    setCategory: (category) => {if (category === "IT")
                                     set({selectedCategory: 1, category: category, currentPage: 1})
                                if (category === "إقتصاد")
                                     set({selectedCategory: 2, category: category, currentPage: 1})
                                if (category === "العمارة")
                                     set({selectedCategory: 3, category: category, currentPage: 1})
                                if (category === "اللغات الاجنبية")
                                     set({selectedCategory: 4, category: category, currentPage: 1})
                                if (category === "العلوم")
                                     set({selectedCategory: 5, category: category, currentPage: 1})
                                
                                   },
    setDegree: (degree) => set({selectedDegree: degree, degree: degree, currentPage: 1}),
    setFinance: (finance) => set({selectedFinance: finance, finance: finance, currentPage: 1})
}))