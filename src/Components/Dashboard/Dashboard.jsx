import { useState } from "react";
import CountryForm from "./CountryForm";
import CityForm from "./CityForm";
import CategoryForm from "./CategoryForm";
import SpecForm from "./SpecForm";
import ScholarshipForm from "./ScholarshipForm";
import ReviewForm from "./ReviewForm";
const Dashboard = () => {
    const [countryData, setCountryData] = useState({ countryNum: "", rate: "" });
    const [cityLinkData, setCityLinkData] = useState({
        cityName: "",
        countryId: "",
    });
    const [categoryData, setCategoryData] = useState({ categoryName: "" });
    const [specData, setSpecData] = useState({ specName: "", categoryId: "" });
    const [scholarshipData, setScholarshipData] = useState({
        name: "",
        country: "",
        city: "",
        degree: "",
        finance: "",
        field: "",
        specialization: "",
        finalDate: "",
        desc: "",
        nationalities: "لا يشترط جنسية",
        gender: "",
        age: "",
        schoolarshipLang: "",
        schoolarshipURL: "",
    });
    const [reviewData, setReviewData] = useState({
        schoolarshipNum: "",
        schoolarshipStuName: "",
        review: "",
    });

    const handleCountryChange = (e) => {
        const { name, value } = e.target;
        setCountryData((prev) => ({ ...prev, [name]: value }));
    };
    const handleCityLinkChange = (e) => {
        const { name, value } = e.target;
        setCityLinkData((prev) => ({ ...prev, [name]: value }));
    };
    const handleCategoryChange = (e) => {
        const { name, value } = e.target;
        setCategoryData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSpecChange = (e) => {
        const { name, value } = e.target;
        setSpecData((prev) => ({ ...prev, [name]: value }));
    };
    const handleScholarshipChange = (e) => {
        const { name, value } = e.target;
        setScholarshipData((prev) => ({ ...prev, [name]: value }));
    };
    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReviewData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitCountry = (e) => {
        e.preventDefault();
        console.log(countryData);
    };
    const handleSubmitCity = (e) => {
        e.preventDefault();
        console.log(cityLinkData);
    };
    const handleSubmitCategory = (e) => {
        e.preventDefault();
        console.log(categoryData);
    };
    const handleSubmitSpecialization = (e) => {
        e.preventDefault();
        console.log(specData);
    };
    const handleSubmitScholarship = (e) => {
        e.preventDefault();
        console.log(scholarshipData);
    };
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        console.log(reviewData);
    };

    return (
        <>
            <div
                dir="rtl"
                className="bg-purple-100 text-neutral-800 dark:bg-slate-800 flex flex-col gap-[25px] md:gap-[40px] !pt-[5.3rem] !px-[20px]"
            >
                <h1 className="text-[40px] md:text-[50px] xl:text-[70px] font-bold dark:text-white mt-[75px] md:mt-0">
                    صفحة الأدمن :
                </h1>

                <CountryForm
                    countryData={countryData}
                    onChange={handleCountryChange}
                    onSubmit={handleSubmitCountry}
                />
                <CityForm
                    cityLinkData={cityLinkData}
                    onChange={handleCityLinkChange}
                    onSubmit={handleSubmitCity}
                />
                <CategoryForm
                    categoryData={categoryData}
                    onChange={handleCategoryChange}
                    onSubmit={handleSubmitCategory}
                />
                <SpecForm
                    specData={specData}
                    onChange={handleSpecChange}
                    onSubmit={handleSubmitSpecialization}
                />

                <h2 className="text-[40px] md:text-[50px] xl:text-[70px] font-bold dark:text-white mt-[75px] md:mt-0">
                    بيانات المنحة المراد اضافتها :
                </h2>
                <ScholarshipForm
                    scholarshipData={scholarshipData}
                    onChange={handleScholarshipChange}
                    onSubmit={handleSubmitScholarship}
                />
            </div>

            <div
                dir="rtl"
                className="bg-purple-100 text-neutral-800 dark:bg-slate-800 flex flex-col gap-[25px] md:gap-[40px] pb-[5.3rem] !px-[20px]"
            >
                <h1 className="text-[40px] md:text-[50px] xl:text-[70px] font-bold dark:text-white mt-[75px] md:mt-0">
                    لإضافة تجربة طالب بمنحة ما :
                </h1>
                <ReviewForm
                    reviewData={reviewData}
                    onChange={handleReviewChange}
                    onSubmit={handleReviewSubmit}
                />
            </div>
        </>
    );
};

export default Dashboard;
