import { useState } from "react";
import ButtonStyle from "./ButtonStyle";
import InputField from "./InputField";

const Dashboard = () => {
    const [formData, setFormData] = useState({
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
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "schoolarshipNum" || name === "schoolarshipStuName" || name === "review") {
            setReviewData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleReviewSubmit = (e) => {
        e.preventDefault();

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

                <form>
                <InputField
                        label="البلد :"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="المدينة :"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="justify-between"
                    />
                </form>
                <h2 className="">بيانات المنحة المراد اضافتها :</h2>
                <form
                    className="grid lg:grid-cols-2 gap-x-6 xl:gap-x-14 gap-y-8 text-lg md:text-xl"
                    onSubmit={handleSubmit}
                >
                    <InputField
                        label="اسم المنحة :"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <InputField
                        label="بلد المنحة :"
                        id="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="المدينة :"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="درجة التأهيل :"
                        id="degree"
                        value={formData.degree}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="التمويل :"
                        id="finance"
                        value={formData.finance}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="الفرع العام :"
                        id="field"
                        value={formData.field}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="الاختصاص :"
                        id="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="تاريخ انتهاء التقديم :"
                        id="finalDate"
                        type="date"
                        value={formData.finalDate}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="وصف المنحة :"
                        id="desc"
                        isTextArea
                        rows="5"
                        value={formData.desc}
                        onChange={handleChange}
                        className="justify-between"
                    />
                    <InputField
                        label="الجنسيات المسموح بها :"
                        id="nationalities"
                        isTextArea
                        rows="5"
                        value={formData.nationalities}
                        onChange={handleChange}
                        className="justify-between"
                    />

                    <div className="flex flex-col md:flex-row gap-5 md:gap-20 text-base md:text-lg">
                        <label className="dark:text-white text-[20px] md:text-[30px]">الجنس :</label>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-3 items-center">
                                <input
                                    name="gender"
                                    id="male"
                                    type="radio"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                />
                                <label className="dark:text-white text-[20px] md:text-[30px]" htmlFor="male">
                                    ذكور فقط
                                </label>
                            </div>
                            <div className="flex gap-3 items-center">
                                <input
                                    name="gender"
                                    id="female"
                                    type="radio"
                                    value="female"
                                    checked={formData.gender === "female"}
                                    onChange={handleChange}
                                />
                                <label className="dark:text-white text-[20px] md:text-[30px]" htmlFor="female">
                                    إناث فقط
                                </label>
                            </div>
                            <div className="flex gap-3 items-center">
                                <input
                                    name="gender"
                                    id="both-gender"
                                    type="radio"
                                    value="both"
                                    checked={formData.gender === "both"}
                                    onChange={handleChange}
                                />
                                <label className="dark:text-white text-[20px] md:text-[30px]" htmlFor="both-gender">
                                    كلا الجنسين
                                </label>
                            </div>
                        </div>
                    </div>

                    <InputField
                        label="العمر المسموح به :"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <InputField
                        label="لغة كورس المنحة :"
                        id="schoolarshipLang"
                        value={formData.schoolarshipLang}
                        onChange={handleChange}
                        className="gap-5"
                    />
                    <InputField
                        label="رابط المنحة :"
                        id="schoolarshipURL"
                        value={formData.schoolarshipURL}
                        onChange={handleChange}
                    />

                    <div className="lg:col-span-2 flex justify-end">
                        <ButtonStyle
                            text="submit"
                            bgColor="#69ffd9"
                            className="px-10 py-2 w-full md:w-auto"
                        />
                    </div>
                </form>
            </div>
            <div dir="rtl"
                className="bg-purple-100 text-neutral-800 dark:bg-slate-800 flex flex-col gap-[25px] md:gap-[40px] pb-[5.3rem] !px-[20px]">
                <h1 className="text-[40px] md:text-[50px] xl:text-[70px] font-bold dark:text-white mt-[75px] md:mt-0">
                    لإضافة تجربة طالب بمنحة ما :
                </h1>
                <form className="grid lg:grid-cols-2 gap-x-6 xl:gap-x-14 gap-y-8 text-lg md:text-xl"
                    onSubmit={handleReviewSubmit}>
                    <InputField
                        label="رقم المنحة :"
                        id="schoolarshipNum"
                        value={reviewData.schoolarshipNum}
                        onChange={handleChange}
                    />
                    <InputField
                        label="اسم الطالب :"
                        id="schoolarshipStuName"
                        value={reviewData.schoolarshipStuName}
                        onChange={handleChange}
                        className="gap-5"
                    />
                    <InputField
                        label="تجربة الطالب :"
                        id="review"
                        isTextArea
                        value={reviewData.review}
                        onChange={handleChange}
                        className="lg:col-span-2"
                    />
                    <div className="lg:col-span-2 flex justify-end">
                        <ButtonStyle
                            text="submit"
                            bgColor="#69ffd9"
                            className="px-10 py-2 w-full md:w-auto"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Dashboard;
