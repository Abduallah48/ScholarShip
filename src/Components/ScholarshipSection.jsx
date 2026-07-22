import Card from "./Card.jsx";
import { useState, useEffect } from "react";
import { useFiltersStore } from "../Store/filters-store.js";

function ScholarshipSection() {
    const currentPage = useFiltersStore((state) => state.currentPage);
    const setPage = useFiltersStore((state) => state.setPage);
    const selectedCountry = useFiltersStore((state) => state.selectedCountry);
    const selectedCategory = useFiltersStore((state) => state.selectedCategory);
    const selectedDegree = useFiltersStore((state) => state.selectedDegree);
    const selectedFinance = useFiltersStore((state) => state.selectedFinance);

    const [scholarships, SetScholarships] = useState([]);
    const [isLoading, SetIsLoading] = useState(false);
    const [errorMesage, SetErrorMessage] = useState("");
    const [lastPage, setLastPage] = useState(1);

    function handlePageChange(page) {
        setPage(page);
    }

    useEffect(() => {
        const getData = async () => {
            SetIsLoading(true);
            SetErrorMessage("");

            try {
                const url = new URL("http://127.0.0.1:8000/api/top-scholarships");

                url.searchParams.append("page", currentPage);
                if (selectedCountry) url.searchParams.append("country", selectedCountry);
                if (selectedCategory) url.searchParams.append("category", selectedCategory);
                if (selectedDegree) url.searchParams.append("degree", selectedDegree);
                if (selectedFinance) url.searchParams.append("finance", selectedFinance);

                const res = await fetch(url);
                const data = await res.json();

                console.log(data);
                if (res.ok) {
                    SetIsLoading(false);
                    SetScholarships(data.data.data);
                    setLastPage(data.data.last_page);
                } else {
                    SetIsLoading(false);
                    SetErrorMessage("something went wrong");
                }
            } catch (error) {
                SetIsLoading(false);
                SetErrorMessage("فشل الاتصال بالخادم, " + error.message);
            }
        };
        getData();
    }, [currentPage, selectedCountry, selectedCategory, selectedDegree, selectedFinance]);

    return (
        <div className="flex flex-col gap-6">
            <div className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {errorMesage && (
                    <p className="text-4xl font-bold text-center text-indigo-950 dark:text-white col-span-full">
                        {errorMesage}
                    </p>
                )}

                {isLoading && (
                    <div className="col-span-full flex flex-col items-center justify-center py-12 gap-4">
                        <div className="w-12 h-12 border-4 border-slate-400 border-t-indigo-600 rounded-full animate-spin dark:border-slate-200 dark:border-t-indigo-600"></div>
                        <p className="text-xl font-semibold text-slate-600 dark:text-slate-300 animate-pulse">
                            جاري تحميل المنح...
                        </p>
                    </div>
                )}

                {!isLoading && scholarships && scholarships.map((scholarship) => (
                    <Card key={scholarship.id} scholarship={scholarship} />
                ))}
            </div>

            <div className="flex justify-center gap-4 mx-auto">
                {Array.from({ length: lastPage }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => handlePageChange(i + 1)}
                        className={`text-md font-bold rounded-full p-2 hover:cursor-pointer ${currentPage === i + 1
                                ? "bg-indigo-600 text-indigo-100 border-indigo-50"
                                : "bg-indigo-100 text-indigo-800 border-indigo-400"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ScholarshipSection;