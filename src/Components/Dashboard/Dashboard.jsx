import { useState } from "react";
import CountryForm from "./CountryForm";
import CityForm from "./CityForm";
import CategoryForm from "./CategoryForm";
import SpecForm from "./SpecForm";
import ScholarshipForm from "./ScholarshipForm";
import ReviewForm from "./ReviewForm";
import ButtonStyle from "../ButtonStyle";
import ApplyCriteria from "./ApplyCriteria.jsx";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("tables");

    const [countryData, setCountryData] = useState({
        countryNum: "",
        rate: ""
    });
    const [cityLinkData, setCityLinkData] = useState({
        cityName: "",
        countryId: "",
    });
    const [categoryData, setCategoryData] = useState({ categoryName: "" });
    const [specData, setSpecData] = useState({ specName: "", categoryId: "" });
    const [scholarshipData, setScholarshipData] = useState({
        scholarship_name: "",
        degree: "",
        finance: "",
        scholarship_description: "",
        donar: "",
        start_date: "",
        finished_date: "",
        scholarship_language: "",
        scholarship_link: "",
        country_id: "",
        city_id: "",
        specialization_id: "",
        category_id: "",
    });
    const [applyCriteria, setApplyCriteria] = useState({
        nationalities: "لا يشترط جنسية",
        gender: "",
        age: "",
    });
    const [reviewData, setReviewData] = useState({
        scholarship_id: "",
        reviewer_name: "",
        rating: "",
        review: ""
    });

    // Handlers
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
    const handleCriteriaChange = (e) => {
        const { name, value } = e.target;
        setApplyCriteria((prev) => ({ ...prev, [name]: value })); // تم التصحيح هنا
    };

    // Submit Functions
    const handleSubmitCountry = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/countries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(countryData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة البلد بنجاح");
                setCountryData({ countryNum: "", rate: "" });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmitCity = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(cityLinkData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة المدينة بنجاح");
                setCityLinkData({ cityName: "", countryId: "" });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmitCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(categoryData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة التصنيف بنجاح");
                setCategoryData({ categoryName: "" });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmitSpecialization = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/specializations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(specData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة التخصص بنجاح");
                setSpecData({ specName: "", categoryId: "" });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

//////////////////////////////////////////
    const handleSubmitCriteria = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/scholarships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(applyCriteria),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة معايير المنحة بنجاح");
                setApplyCriteria({
                    nationalities: "لا يشترط جنسية",
                    gender: "",
                    age: "",
                });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
////////////////////////

    const handleSubmitScholarship = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/scholarships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(scholarshipData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة المنحة بنجاح");
                setScholarshipData({
                    scholarship_name: "",
                    degree: "",
                    finance: "",
                    scholarship_description: "",
                    donar: "",
                    start_date: "",
                    finished_date: "",
                    scholarship_language: "",
                    scholarship_link: "",
                    country_id: "",
                    city_id: "",
                    specialization_id: "",
                    category_id: "",
                });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    /////////////////////////////////////////////////////
    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/scholarships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(reviewData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة تجربة الطالب بنجاح");
                setReviewData({
                    schoolarshipNum: "",
                    schoolarshipStuName: "",
                    review: "",
                });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };
    //////////////////////////////////////////////////


    return (
        <div
            dir="rtl"
            className="min-h-screen mx-auto md:max-w-5xl lg:max-w-7xl bg-purple-100 text-neutral-800 dark:bg-slate-800 flex flex-col gap-[25px] md:gap-[40px] py-[5rem] px-[2rem]"
        >
            <h1 className="text-[40px] md:text-[50px] dark:text-white font-bold mt-[80px] md:mt-0">
                صفحة الأدمن :
            </h1>
            <h2 className="text-[30px] md:text-[40px] dark:text-white font-bold">
                لإضافة :
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ButtonStyle
                    onClick={() => setActiveTab("tables")}
                    text="بيانات الجداول"
                    className="px-[30px]"
                />
                <ButtonStyle
                    onClick={() => setActiveTab("scholarship")}
                    text="منحة"
                />
                <ButtonStyle
                    onClick={() => setActiveTab("review")}
                    text=" تجربة طالب"
                    className="px-[30px]"
                />
            </div>

            {activeTab === "tables" && (
                <div className="flex flex-col gap-6">
                    <h2 className="!text-[30px] font-bold dark:text-white">
                        إضافة بيانات الجداول الأساسية:
                    </h2>
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
                </div>
            )}

            {activeTab === "scholarship" && (
                <>
                    <h2 className="!text-[30px] font-bold dark:text-white">
                        بيانات المنحة المراد اضافتها :
                    </h2>
                    <ScholarshipForm
                        scholarshipData={scholarshipData}
                        onChange={handleScholarshipChange}
                        onSubmit={handleSubmitScholarship}
                    />
                    <h2 className="!text-[30px] font-bold dark:text-white">
                        بيانات معايير التقديم :
                    </h2>
                    <ApplyCriteria
                        applyCriteria={applyCriteria}
                        onChange={handleCriteriaChange}
                        onSubmit={handleSubmitCriteria}
                    />
                </>
            )}

            {activeTab === "review" && (
                <>
                    <h1 className="!text-[30px] md:text-[50px] xl:text-[70px] font-bold dark:text-white">
                        لإضافة تجربة طالب بمنحة ما :
                    </h1>
                    <ReviewForm
                        reviewData={reviewData}
                        onChange={handleReviewChange}
                        onSubmit={handleReviewSubmit}
                    />
                </>
            )}
        </div>
    );
};

export default Dashboard;