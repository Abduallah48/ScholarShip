import { useState } from "react";
import CountryForm from "./CountryForm";
import CityForm from "./CityForm";
import CategoryForm from "./CategoryForm";
import SpecForm from "./SpecForm";
import ScholarshipForm from "./ScholarshipForm";
import ReviewForm from "./ReviewForm";
import ButtonStyle from "../ButtonStyle";
import { useTokenStore } from "../../Store/token-store";
import { useCitiesByCountryStore } from "../../Store/citiesByCountry-store";


const Dashboard = () => {
    const token = useTokenStore((state) => state.token);
    const [activeTab, setActiveTab] = useState("tables");

    const setSelectedCountryId = useCitiesByCountryStore((state) => state.setSelectedCountryId);

    

    // States
    const [countryData, setCountryData] = useState({
        country_name: "",
        country_rate: ""
    });
    const [cityLinkData, setCityLinkData] = useState({
        city_name: "",
        country_id: "",
    });
    const [categoryData, setCategoryData] = useState({ category_name: "" });
    const [specData, setSpecData] = useState({ specialization_name: "", category_id: "" });
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
        application_criteria: {
            nationalities: "",
            age: "",
            gender: ""
        },
        how_to_apply_description: ""
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
    // const handleScholarshipChange = (e) => {
    //     const { name, value, type } = e.target;
    //     const criteriaFields = ["nationalities", "age", "gender"];
    
    //     const parsedValue = (type === "number" || name.endsWith("_id"))
    //         ? (value === "" ? "" : Number(value))
    //         : value;
    
    //     if (criteriaFields.includes(name)) {
    //         setScholarshipData((prev) => ({
    //             ...prev,
    //             application_criteria: {
    //                 ...prev.application_criteria,
    //                 [name]: parsedValue,
    //             },
    //         }));
    //     } else {
    //         setScholarshipData((prev) => ({
    //             ...prev,
    //             [name]: parsedValue,
    //         }));
    //     }
    // };

    const handleScholarshipChange = (e) => {
        const { name, value, type } = e.target;
        const criteriaFields = ["nationalities", "age", "gender"];
    
        // 1. This automatically converts the string value to an integer 
        // because the input name is "country_id" (ends with "_id")
        const parsedValue = (type === "number" || name.endsWith("_id"))
            ? (value === "" ? "" : Number(value))
            : value;
    
        // 2. 👇 THIS IS THE MAGIC: 
        // When the user selects a country in the Scholarship Form, 
        // send the integer ID to your Zustand store to fetch the cities!
        if (name === "country_id") {
            setSelectedCountryId(parsedValue);
        }
    
        // 3. Keep updating the rest of the form data normally
        if (criteriaFields.includes(name)) {
            setScholarshipData((prev) => ({
                ...prev,
                application_criteria: {
                    ...prev.application_criteria,
                    [name]: parsedValue,
                },
            }));
        } else {
            setScholarshipData((prev) => ({
                ...prev,
                [name]: parsedValue,
            }));
        }
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setReviewData((prev) => ({ ...prev, [name]: value }));
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
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(countryData),
            });
            const result = await response.json();

            if (response.ok) {
                console.log("تمت إضافة البلد بنجاح");
                setCountryData({ country_name: "", country_rate: "" });
                console.log("Country added successfully:", countryData);
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
                    Authorization: ` Bearer ${token}`
                },
                body: JSON.stringify(cityLinkData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة المدينة بنجاح");
                setCityLinkData({ city_name: "", country_id: "" });
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
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(categoryData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة التصنيف بنجاح");
                setCategoryData({ category_name: "" });
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
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(specData),
            });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة التخصص بنجاح");
                setSpecData({ specialization_name: "", category_id: "" });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmitScholarship = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/api/scholarships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
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
                    application_criteria: {
                    nationalities: "",
                    age: "",
                    gender: ""
        },
                    how_to_apply_description: ""
    })
            } else {
                alert(result.message);
                console.log("Error adding scholarship:", result, response.status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/scholarships/${reviewData.scholarship_id}/reviews`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(reviewData),
                });
            const result = await response.json();

            if (response.ok) {
                alert("تمت إضافة تجربة الطالب بنجاح");
                setReviewData({
                    scholarship_id: "",
                    reviewer_name: "",
                    rating: "",
                    review: "",
                });
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                    className="bg-indigo-700 px-[30px]"
                />
                <ButtonStyle
                    onClick={() => setActiveTab("scholarship")}
                    text="منحة"
                    className="bg-indigo-700"
                />
                <ButtonStyle
                    onClick={() => setActiveTab("review")}
                    text="تجربة طالب"
                    className="bg-indigo-700 px-[30px]"
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
                    <h2 className="!text-[35px] font-bold dark:text-white">
                        بيانات المنحة المراد اضافتها :
                    </h2>
                    <ScholarshipForm
                        scholarshipData={scholarshipData}
                        onChange={handleScholarshipChange}
                        onSubmit={handleSubmitScholarship}
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