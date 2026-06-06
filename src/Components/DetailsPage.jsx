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

const DetailsPage = () => {
    return (
        <main dir="rtl" className="dark:bg-slate-800">
            <div className="p-4 lg:m-[4rem] lg:mx-[25px] 2xl:mx-[50px]">
                <h1 className="dark:text-white text-[40px] md:text-[50px] xl:text-[70px] font-bold text-neutral-800 md:pt-[90px] lg:pt-[10px] pt-[170px]">
                    المنحة الايطالية للعلوم
                </h1>
                <div className="flex flex-col xl:flex-row xl:flex-wrap xl:items-center justify-center lg:gap-[10px] 2xl:gap-[30px] mt-[20px]">
                    <h2 className="dark:text-white w-full text-neutral-800 py-[20px] xl:py-[0px] font-bold text-[30px] md:text-[40px] order-3 xl:order-1">
                        معايير المنحة :
                    </h2>
                    <div className="order-1 xl:order-3">
                        <img
                            className="w-full xl:w-170"
                            src={schoolarShip}
                            alt="صورة المنحة"
                        />
                    </div>
                    <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 xl:flex-1 order-4 xl:order-2">
                        <DetailsCard
                            img={flag}
                            mainText="البلد"
                            secondaryText="المدينة"
                        />
                        <DetailsCard
                            img={graduation}
                            mainText="درجة التأهيل"
                            secondaryText="بكالوريوس"
                        />
                        <DetailsCard
                            img={finance}
                            mainText="التمويل"
                            secondaryText="جزئي"
                        />
                        <DetailsCard
                            img={specialization}
                            mainText="الاختصاص"
                            secondaryText="هندسة معلوماتية"
                        />
                        <DetailsCard
                            className="col-span-full"
                            img={clock}
                            mainText="تاريخ انتهاء التقديم"
                            secondaryText="22/1/2027"
                        />
                    </div>
                </div>
                <h3 className="dark:text-white text-[17px]  lg:text-[30px] mx-[20px] text-center md:text-start md:py-[15px] py-[30px]">
                    وصف للمنحة Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit et ipsum eaque voluptatum, odio tempore. Ex officiis sunt fuga
                    suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere sequi nemo blanditiis quae voluptas minus labore, quos asperiores
                    vel unde rerum? Eaque ipsa totam voluptas qui laboriosam natus tempore
                    incidunt.
                </h3>
                <ButtonStyle text="انتقل للمنحة" />
                <section className="mt-8">
                    <h2 className="text-2xl dark:text-white w-full text-neutral-800 lg:py-[30px] p-[20px] font-bold text-[30px] md:text-[40px]">معايير التقديم :</h2>
                    <div className="flex flex-col gap-2">
                        <DetailsCard img={flag}
                            mainText="الجنسية"
                            secondaryText="لا يشترط جنسية"
                            className="flex-grow md:gap-7"
                            className2="" />
                        <DetailsCard img={age}
                            mainText="العمر"
                            secondaryText="18-30"
                            className=" md:gap-7"
                            className2="" />
                        <DetailsCard img={gender}
                            mainText="الجنس"
                            secondaryText="كلا الجنسين"
                            className="md:gap-7"
                            className2="" />
                        {/* <DetailsCard img="/assets/images/language-icon.png"
                                mainText="اختبار اللغة المطلوب"
                                secondaryText="TOEFL"
                                className="md:gap-7"
                                className2="" /> */}
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