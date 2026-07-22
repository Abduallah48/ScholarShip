import ButtonStyle from "./ButtonStyle";
import DetailsCard from "./DetailsCard";
import ScholarshipSection from "./SchoolarshipSection";
import schoolarShip from "../assets/Property,home-Rustic.jpg";
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

const DetailsPage = () => {
    const { id } = useParams();
    const [scholarship, setScholarship] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getScholarshipDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/scholarships/${id}`);
                console.log("البيانات القادمة من الباك إند هي:", response.data);
                setScholarship(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        getScholarshipDetails();
    }, [id]);
    if (loading) {
        return <div className="text-center p-10 dark:text-white">جاري تحميل تفاصيل المنحة...</div>;
    }

    if (!scholarship) {
        return <div className="text-center p-10 dark:text-white">المنحة غير موجودة!</div>;
    }

    return (
        <main dir="rtl" className="bg-purple-100 mx-auto md:max-w-5xl lg:max-w-7xl dark:bg-slate-950">
            <div className="p-4 lg:m-[4rem] lg:mx-[25px] 2xl:mx-[50px]">
                <h1 className="dark:text-white text-[35px] md:text-[45px] xl:text-[55px] font-bold text-neutral-800 md:pt-[90px] lg:pt-[10px] pt-[170px]">
                    {scholarship.scholarship_name}
                </h1>
                <div className="flex flex-col xl:flex-row xl:flex-wrap xl:items-center justify-center lg:gap-[10px] 2xl:gap-[30px] mt-[20px]">
                    <h2 className="dark:text-white w-full text-neutral-800 py-[20px] xl:py-[0px] font-bold text-[30px] md:text-[40px] order-3 xl:order-1">
                        معايير المنحة :
                    </h2>
                    <div className="order-1 xl:order-3">
                        <img
                            className="w-full xl:w-140"
                            src={`http://127.0.0.1:8000${scholarship.photos?.[0]?.image_path}`} alt="صورة المنحة"
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 xl:flex-1 order-4 xl:order-2">
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
                            // className="col-span-full"
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
                <h3 className="dark:text-white text-[17px]  lg:text-[30px] mx-[20px] text-center md:text-start md:py-[15px] py-[30px]">
                    {scholarship.scholarship_description}
                </h3>
                <ButtonStyle text="انتقل للمنحة" />
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
                <div className="flex flex-col sm:flex-row justify-center gap-3 my-10">
                    <ButtonStyle text="انتقل للمنحة" />
                    <ButtonStyle text="حفظ" />
                </div>
                <h2 className="text-2xl dark:text-white w-full text-neutral-800 lg:py-[30px] p-[20px] font-bold text-[30px] md:text-[40px]">منح مشابهة :</h2>
                <ScholarshipSection />
            </div>
        </main>
    );
};

export default DetailsPage;