import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTokenStore } from "../Store/token-store";

function Card({
    scholarship,
    isFromFavorites = false,
    onFavoriteRemoved
}) {
    const token = useTokenStore((state) => state.token);
    const navigate = useNavigate();
    const scholarshipID = scholarship.id;
    
    
    // const [isFavorite, setIsFavorite] = useState(scholarship.is_favorite || false);

    const [isFavorite, setIsFavorite] = useState(
        isFromFavorites || scholarship?.is_favorite === true
    );

    if (!scholarship) {
        return null;
    }

    // const scholarshipID = scholarship.id;

    async function addScholarshipToFavorites(id) {
        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/favorites/${id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            if (res.ok) {
                console.log("Scholarship added successfully");
                setIsFavorite(true);
            } else {
                console.log(
                    "Something went wrong while adding favorite",
                    res.status
                );
            }
        } catch (error) {
            console.error(
                "Something went wrong while adding favorite",
                error
            );
        }
    }

    async function deleteScholarshipFromFavorites(id) {
        try {
            const res = await fetch(
                `http://127.0.0.1:8000/api/favorites/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            if (res.ok) {
                console.log(
                    "Scholarship removed from favorites successfully"
                );

                setIsFavorite(false);

            
                
                if (onFavoriteRemoved) {
                    onFavoriteRemoved(id);
                }
            } else {
                console.log(
                    "Something went wrong while deleting favorite",
                    res.status
                );
            }
        } catch (error) {
            console.error(
                "Something went wrong while deleting favorite",
                error
            );
        }
    }

    function handleFavoriteClick() {
        if (isFavorite) {
            deleteScholarshipFromFavorites(scholarshipID);
        } else {
            addScholarshipToFavorites(scholarshipID);
        }
    }

    return (
        <div className="flex items-center justify-center h-full">
            <div
                className="
                    flex flex-col
                    w-full
                    h-full
                    gap-2
                    border
                    max-w-sm
                    p-4
                    rounded-xl
                    shadow-lg
                    shadow-indigo-700
                    hover:shadow-md
                    transition-all
                    duration-300
                    bg-white
                    dark:bg-slate-800
                "
            >
                {/* Image */}
                <img
                    src={scholarship.photo_url}
                    alt={scholarship.scholarship_name || "Scholarship"}
                    className="rounded-lg object-cover w-full h-[250px]"
                />

                {/* Scholarship name */}
                <h2
                    className="
                        text-right
                        text-2xl
                        font-bold
                        text-slate-900
                        mb-6
                        dark:text-slate-50
                    "
                >
                    {scholarship.scholarship_name}
                </h2>

                {/* Information */}
                <div className="flex flex-wrap gap-4 justify-end">
                    <span
                        className="
                            bg-slate-200
                            p-2
                            rounded-xl
                            font-bold
                            text-lg
                            dark:text-slate-300
                            dark:bg-slate-700
                        "
                    >
                        {scholarship.city_name}
                    </span>

                    <span
                        className="
                            bg-slate-200
                            p-2
                            rounded-xl
                            font-bold
                            text-lg
                            dark:text-slate-300
                            dark:bg-slate-700
                        "
                    >
                        {scholarship.finance}
                    </span>

                    <span
                        className="
                            bg-slate-200
                            p-2
                            rounded-xl
                            font-bold
                            text-lg
                            dark:text-slate-300
                            dark:bg-slate-700
                        "
                    >
                        {scholarship.degree}
                    </span>

                    <span
                        className="
                            bg-slate-200
                            p-2
                            rounded-xl
                            font-bold
                            text-lg
                            dark:text-slate-300
                            dark:bg-slate-700
                        "
                    >
                        {scholarship.specialization_name}
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-end mt-auto">
                    <button
                        type="button"
                        className="
                            bg-indigo-500
                            font-semibold
                            text-white
                            rounded-2xl
                            px-4
                            py-2
                            cursor-pointer
                            shadow-xl/20
                            hover:bg-indigo-600
                            transition-all
                            duration-300
                        "
                        onClick={() =>
                            navigate(`/detailsPage/${scholarshipID}`)
                        }
                    >
                        عرض تفاصيل المنحة
                    </button>

                    {token && (
                        <button
                            type="button"
                            onClick={handleFavoriteClick}
                            className={
                                isFavorite
                                    ? `
                                        bg-black
                                        text-white
                                        rounded-2xl
                                        px-4
                                        py-2
                                        cursor-pointer
                                      `
                                    : `
                                        bg-indigo-600
                                        font-semibold
                                        text-slate-100
                                        rounded-2xl
                                        px-4
                                        py-2
                                        cursor-pointer
                                        shadow-xl/20
                                        hover:bg-indigo-700
                                        transition-all
                                        duration-300
                                      `
                            }
                        >
                            {isFavorite ? "تم الحفظ" : "حفظ"}
                        </button>
                    )}
                </div>

                {/* Status */}
                <span className="text-lg text-red-600 font-semibold">
                    {scholarship.start_status}
                </span>
            </div>
        </div>
    );
}

export default Card;
