import ButtonStyle from "./ButtonStyle";
import DetailsCard from "./DetailsCard";
import ScholarshipSection from "./SchoolarshipSection";
//import schoolarShip from "../assets/Property,home-Rustic.jpg";
import clock from "../assets/clock.png";
import finance from "../assets/financing1.png";
import flag from "../assets/flage-icon.png";
import gender from "../assets/gender-icon.png";
import graduation from "../assets/graduation-hat2.png";
import age from "../assets/age-icon.png";
import specialization from "../assets/notebook.png";
import language from "../assets/language-icon.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTokenStore } from "../Store/token-store";


const DetailsPage = () => {
    const { id } = useParams();
    const [scholarship, setScholarship] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const token = useTokenStore((state) => state.token);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const getScholarshipDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/scholarships/${id}`,{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });
                setIsFavorite(response.data.data.is_favorite === true);
                console.log("البيانات القادمة من الباك إند هي:", response.data);
                setScholarship(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        getScholarshipDetails();
    }, [id, token]);

    const handleFavoriteClick = async () => {
        try {
            const method = isFavorite ? "DELETE" : "POST";
            const res = await fetch(`http://127.0.0.1:8000/api/favorites/${id}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            if (res.ok) {
                setIsFavorite(!isFavorite); // Toggle the state instantly
            } else {
                console.error("Something went wrong", res.status);
            }
        } catch (error) {
            console.error("Error updating favorites:", error);
        }
    };

    if (loading) {
        return <div className="text-center p-10 dark:text-white">جاري تحميل تفاصيل المنحة...</div>;
    }

    if (!scholarship) {
        return <div className="text-center p-10 dark:text-white">المنحة غير موجودة!</div>;
    }

    return (
        <main dir="rtl" className="relative bg-purple-100 mx-auto md:max-w-5xl lg:max-w-7xl dark:bg-slate-950">
            <div className="p-4 lg:m-[4rem] lg:mx-[25px] 2xl:mx-[50px]">
                <h1 className="dark:text-white text-[35px] md:text-[45px] xl:text-[55px] font-bold text-neutral-800 md:pt-[90px] lg:pt-[10px] pt-[170px]">
                    {scholarship.scholarship_name}
                </h1>

                {/* تم تعديل هذا القسم ليصبح متجاوباً ومنظماً بالكامل على الشاشات المتوسطة والكبيرة */}
                <div className="mt-[20px]">
                    <h2 className="dark:text-white w-full text-neutral-800 py-[20px] font-bold text-[30px] md:text-[40px]">
                        معايير المنحة :
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* صورة المنحة */}
                        <div className="lg:col-span-5 w-full flex justify-center">
                            <img
                                className="w-full h-auto max-h-[400px] object-cover rounded-2xl shadow-md"
                                src={`${scholarship.photo_url}`} alt="صورة المنحة"
                            />
                        </div>

                        {/* شبكة البطاقات */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <DetailsCard
                                img={flag}
                                mainText={scholarship.country.country_name}
                                secondaryText={scholarship.city.city_name}
                            />
                            <DetailsCard
                                img={graduation}
                                mainText="درجة التأهيل"
                                secondaryText={scholarship.degree}
                            />
                            <DetailsCard
                                img={finance}
                                mainText="التمويل"
                                secondaryText={scholarship.finance}
                            />
                            <DetailsCard
                                img={specialization}
                                mainText="الاختصاص"
                                secondaryText={scholarship.category.category_name}
                            />
                            <DetailsCard
                                img={clock}
                                mainText="تاريخ انتهاء التقديم"
                                secondaryText={scholarship.finished_date}
                            />
                            <DetailsCard img={language}
                                mainText="لغة الكورس"
                                secondaryText={scholarship.scholarship_language}
                                className="md:gap-7" />
                        </div>
                    </div>
                </div>

                <h3 className="dark:text-white text-[17px] lg:text-[30px] mx-[20px] text-center md:text-start md:py-[15px] py-[30px]">
                    {scholarship.scholarship_description}
                </h3>
                
                <section className="mt-8">
                    <h2 className="text-2xl dark:text-white w-full text-neutral-800 lg:py-[30px] p-[20px] font-bold text-[30px] md:text-[40px]">معايير التقديم :</h2>
                    <div className="flex flex-col gap-2">
                        <DetailsCard img={flag}
                            mainText="الجنسية"
                            secondaryText={scholarship.application_criteria?.[0]?.value || "لا يشترط جنسية معينة"}
                            className="flex-grow md:gap-7"
                            className2="" />

                        <DetailsCard img={age}
                            mainText="العمر"
                            secondaryText={scholarship.application_criteria?.[1]?.value || "جميع الأعمار مقبولة"}
                            className=" md:gap-7"
                            className2="" />

                        <DetailsCard img={gender}
                            mainText="الجنس"
                            secondaryText={scholarship.application_criteria?.[2]?.value || "كلا الجنسين"}
                            className="md:gap-7"
                            className2="" />
                    </div>
                </section>
                <div className="flex flex-col md:!flex-row justify-center gap-2 my-10">
               {token && (
                     <ButtonStyle 
                            text={isFavorite ? "تم الحفظ" : "حفظ"} 
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
                        />
                )}
                    <ButtonStyle className="bg-indigo-700" onClick={() => setIsModalOpen(true)} text="طريقة التقديم" />
                </div>

                <div>
                    <h2 className="text-2xl dark:text-white w-full text-neutral-800 lg:py-[30px] p-[20px] font-bold text-[30px] md:text-[40px]"> تجارب طلاب  :</h2>
                    {scholarship.reviews && scholarship.reviews.length > 0 ? (
                        <div className="flex flex-col gap-4 px-4 h-50 overflow-y-auto">
                            {scholarship.reviews.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-4 bg-slate-700 dark:bg-slate-800 rounded-xl"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-lg text-indigo-200 dark:text-indigo-700">
                                            {item.reviewer_name}
                                        </h4>
                                    </div>
                                    <p className="text-white">
                                        {item.review}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="dark:text-white text-[17px] lg:text-[30px] mx-[20px] text-center md:text-start md:py-[15px] py-[30px]">
                            لا توجد تجارب لهذه المنحة بعد.
                        </p>
                    )}
                </div>

                <h2 className="text-2xl dark:text-white w-full text-neutral-800 lg:py-[30px] p-[20px] font-bold text-[30px] md:text-[40px]">منح مشابهة :</h2>

                <ScholarshipSection currentScholarshipId={id} />
            </div>

            {/* واجهة طريقة التقديم */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
                    <div className="bg-white h-[600px] dark:bg-slate-900 p-6 rounded-2xl w-full max-w-2xl flex flex-col justify-between shadow-2xl">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700 pb-2">
                                طريقة التقديم :
                            </h2>

                            <div className="dark:text-slate-200 text-xl md:text-2xl">
                                {scholarship.how_to_apply?.how_to_apply_description || "لا تتوفر تفاصيل إضافية لطريقة التقديم."}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-gray-100 dark:border-slate-800 flex flex-col gap-2 justify-between items-center sm:flex-row ">
                            <ButtonStyle
                            className="bg-indigo-700"
                                text="انتقل للمنحة"
                                onClick={() => window.open(scholarship.scholarship_link, "_blank")}
                            />
                            <ButtonStyle
                                className="bg-indigo-700"
                                text="إغلاق"
                                onClick={() => setIsModalOpen(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

DetailsPage.displayName = "DetailsPage";

export default DetailsPage;