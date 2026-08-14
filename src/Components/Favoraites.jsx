import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import { useTokenStore } from "../Store/token-store";

function Favoraites() {
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const token = useTokenStore((state) => state.token);

    useEffect(() => {
        async function favFetch() {
            setIsLoading(true);
            setErrorMessage("");

            try {
                const res = await fetch(
                    "http://127.0.0.1:8000/api/favorites",
                    {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = await res.json();

                console.log("FULL FAVORITES RESPONSE:", data);

                if (res.ok) {
                    const favoritesData = data.data || [];

                    // توحيد شكل البيانات
                    const normalizedFavorites = favoritesData.map((item) => {
                        return item.scholarship || item;
                    });

                    setFavorites(normalizedFavorites);
                } else {
                    setErrorMessage("حدث خطأ أثناء جلب المفضلة");
                }

            } catch (error) {
                console.error("something went wrong", error);
                setErrorMessage("فشل الاتصال بالخادم");
            } finally {
                setIsLoading(false);
            }
        }

        if (token) {
            favFetch();
        }
    }, [token]);

    function removeFavorite(id) {
        setFavorites((prev) =>
            prev.filter((favorite) => favorite.id !== id)
        );
    }

    return (
        <div className="min-h-screen pt-32 md:pt-24 px-4 pb-8">

            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="w-12 h-12 border-4 border-slate-400 border-t-indigo-600 rounded-full animate-spin dark:border-slate-200 dark:border-t-indigo-600"></div>

                    <p className="text-xl font-semibold text-slate-600 dark:text-slate-300 animate-pulse">
                        جاري تحميل المفضلة...
                    </p>
                </div>

            ) : errorMessage ? (

                <p className="text-center text-2xl text-red-600 font-bold">
                    {errorMessage}
                </p>

            ) : favorites.length > 0 ? (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:max-w-5xl lg:max-w-7xl mx-auto">
                    {favorites.map((fav) => (
                        <Card
                            key={fav.id}
                            scholarship={fav}
                            isFromFavorites={true}
                            onFavoriteRemoved={removeFavorite}
                        />
                    ))}
                </div>

            ) : (

                <div className="min-h-[50vh] flex items-center justify-center">
                    <p className="text-3xl text-indigo-600 font-bold dark:text-slate-100 md:text-4xl lg:text-5xl">
                        المفضلة فارغة
                    </p>
                </div>

            )}

        </div>
    );
}

export default Favoraites;
