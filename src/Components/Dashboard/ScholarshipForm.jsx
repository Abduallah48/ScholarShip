import ButtonStyle from "../ButtonStyle";
import InputField from "../InputField";
//import { useState } from "react";

import useCategories from "../../Hooks/useCategories";
import useCountries from "../../Hooks/useCountries";
import useSpecializations from "../../Hooks/useSpecializations";
import useCities from "../../Hooks/useCities";


const ScholarshipForm = ({ scholarshipData, onChange, onSubmit }) => {

    const { countries } = useCountries();
    const { cities } = useCities();
    const { categories } = useCategories();
    const { specializations } = useSpecializations();
    const degrees = ["ثانوية عامة", "بكالوريوس", "ماجستير", "دكتوراه"]
    const finances = ["ممولة بالكامل", "ممولة جزئيا", "غير ممولة"]

    return (
        <form
            className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl"
            onSubmit={onSubmit}
        >
            <InputField
                label="اسم المنحة :"
                id="scholarship_name"
                name="scholarship_name"
                value={scholarshipData.scholarship_name}
                onChange={onChange}
            />
            {/* <InputField
                label="بلد المنحة :"
                id="country_id"
                name="country_id"
                value={scholarshipData.country_id}
                onChange={onChange}
                className="justify-between"
            /> */}

            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">البلد:</label>
                <select
                    name="country_id"
                    value={scholarshipData.country_id || ""} // نربطها بالـ State الأساسي
                    onChange={onChange} // نستخدم دالة الأب مباشرة
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto "
                >
                    {/* خيار افتراضي */}
                    <option className="text-slate-700 dark:text-slate-50" value="" disabled>اختر البلد</option>

                    {countries.length > 0 ? (
                        countries.map((country) => (
                            // استخدمنا أقواس عادية () لعمل return مباشر، وأضفنا الـ key
                            <option key={country.id} className="text-slate-700 dark:text-white text-[20px] md:text-[30px]" value={country.id}>
                                {country.country_name}
                            </option>
                        ))
                    ) : (
                        <option disabled>لا يوجد بلدان للعرض</option>
                    )}
                </select>
            </div>

            {/* <InputField
                label="المدينة :"
                id="city_id"
                name="city_id"
                value={scholarshipData.city_id}
                onChange={onChange}
                className="justify-between"
            /> */}

            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">المدينة:</label>
                <select
                    name="city_id"
                    value={scholarshipData.city_id || ""} // نربطها بالـ State الأساسي
                    onChange={onChange} // نستخدم دالة الأب مباشرة
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto"
                >
                    {/* خيار افتراضي */}
                    <option className="text-slate-700 dark:text-slate-50" value="" disabled>اختر المدينة :</option>

                    {cities.length > 0 ? (
                        cities.map((city) => (
                            // استخدمنا أقواس عادية () لعمل return مباشر، وأضفنا الـ key
                            <option key={city.id} className="text-slate-700 dark:text-white text-[20px] md:text-[30px]" value={city.id}>
                                {city.city_name}
                            </option>
                        ))
                    ) : (
                        <option disabled>لا يوجد مدن للعرض</option>
                    )}
                </select>
            </div>



            {/* <InputField
                label="درجة التأهيل :"
                id="degree"
                name="degree"
                value={scholarshipData.degree}
                onChange={onChange}
                className="justify-between"
            /> */}

            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">درجة التأهيل:</label>
                <select
                    name="degree"
                    value={scholarshipData.degree || ""}
                    onChange={onChange}
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto"
                >
                    {/* خيار افتراضي */}
                    <option className="text-slate-700 dark:text-slate-50" value="" disabled>اختر درجة التأهيل :</option>

                    {degrees.length > 0 ? (
                        degrees.map((degree, index) => (
                            <option key={index} className="text-slate-700 dark:text-white text-[20px] md:text-[30px]" value={degree}>
                                {degree}
                            </option>
                        ))
                    ) : (
                        <option disabled>لا يوجد درجات تأهيل للعرض </option>
                    )}
                </select>
            </div>

            {/* <InputField
                label="التمويل :"
                id="finance"
                name="finance"
                value={scholarshipData.finance}
                onChange={onChange}
                className="justify-between"
            /> */}
            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">التمويل :</label>
                <select
                    name="finance"
                    value={scholarshipData.finance || ""} // نربطها بالـ State الأساسي
                    onChange={onChange} // نستخدم دالة الأب مباشرة
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto"
                >
                    {/* خيار افتراضي */}
                    <option className="text-slate-700 dark:text-slate-50" value="" disabled>اختر التمويل :</option>

                    {finances.length > 0 ? (
                        finances.map((finance, index) => (
                            // استخدمنا أقواس عادية () لعمل return مباشر، وأضفنا الـ key
                            <option key={index} className="text-slate-700 dark:text-white text-[20px] md:text-[30px]" value={finance}>
                                {finance}
                            </option>
                        ))
                    ) : (
                        <option disabled>لا يوجد خيارات تمويل للعرض </option>
                    )}
                </select>
            </div>

            <InputField
                label="الجهة المانحة :"
                id="donar"
                name="donar"
                value={scholarshipData.donar}
                onChange={onChange}
                className="justify-between"
            />
            {/* <InputField
                label="الفرع العام :"
                id="category_id"
                name="category_id"
                value={scholarshipData.category_id}
                onChange={onChange}
                className="justify-between"
            /> */}

            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">الفرع العام :</label>
                <select
                    name="category_id"
                    value={scholarshipData.category_id || ""}
                    onChange={onChange}
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto"
                >
                    <option value="" disabled>اختر الفرع العام :</option>

                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <option key={category.id} className="dark:text-white text-[20px] md:text-[30px]" value={category.id}>
                                {category.category_name}
                            </option>
                        ))
                    ) : (
                        <option disabled>لا يوجد فروع للعرض</option>
                    )}
                </select>
            </div>


            {/* <InputField
                label="الاختصاص :"
                id="specialization_id"
                name="specialization_id"
                value={scholarshipData.specialization_id}
                onChange={onChange}
                className="justify-between"
            /> */}

            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]"> الاختصاص :</label>
                <select
                    name="specialization_id"
                    value={scholarshipData.specialization_id || ""}
                    onChange={onChange}
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto"
                >
                    <option value="" disabled>اختر الاختصاص  :</option>

                    {specializations.length > 0 ? (
                        specializations.map((specialization) => (
                            <option key={specialization.id} className="dark:text-white text-[20px] md:text-[30px]" value={specialization.id}>
                                {specialization.specialization_name}
                            </option>
                        ))
                    ) : (
                        <option disabled>لا يوجداختصاصات للعرض</option>
                    )}
                </select>
            </div>

            <InputField
                label="تاريخ بداية التقديم :"
                id="start_date"
                name="start_date"
                type="date"
                value={scholarshipData.start_date}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="تاريخ انتهاء التقديم :"
                id="finished_date"
                name="finished_date"
                type="date"
                value={scholarshipData.finished_date}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="لغة كورس المنحة :"
                id="scholarship_language"
                name="scholarship_language"
                value={scholarshipData.scholarship_language}
                onChange={onChange}
                className="gap-5"
            />
            <InputField
                label="رابط المنحة :"
                id="scholarship_link"
                name="scholarship_link"
                value={scholarshipData.scholarship_link}
                onChange={onChange}
            />
            <InputField
                label="وصف المنحة :"
                id="scholarship_description"
                name="scholarship_description"
                isTextArea
                rows="5"
                value={scholarshipData.scholarship_description}
                onChange={onChange}
                className="justify-between lg:col-span-2"
            />

            {/* معايير التقديم */}
            <h2 className="lg:col-span-2 !text-[35px] font-bold dark:text-white mt-4">
                بيانات معايير التقديم :
            </h2>

            <div className="lg:col-span-2 grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8">
                <InputField
                    label="العمر المسموح به :"
                    id="age"
                    name="age"
                    value={scholarshipData.application_criteria.age}
                    onChange={onChange}
                    className="md:items-center"
                />

                <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-base md:text-lg">
                    <label className="dark:text-white text-[20px] md:text-[30px]">
                        الجنس :
                    </label>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-3 items-center">
                            <input
                                name="gender"
                                id="male"
                                type="radio"
                                value="male"
                                checked={scholarshipData.application_criteria.gender === "male"}
                                onChange={onChange}
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
                                checked={scholarshipData.application_criteria.gender === "female"}
                                onChange={onChange}
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
                                checked={scholarshipData.application_criteria.gender === "both"}
                                onChange={onChange}
                            />
                            <label className="dark:text-white text-[20px] md:text-[30px]" htmlFor="both-gender">
                                كلا الجنسين
                            </label>
                        </div>
                    </div>
                </div>

                <InputField
                    label="الجنسيات المسموح بها :"
                    id="nationalities"
                    name="nationalities"
                    rows="5"
                    isTextArea
                    value={scholarshipData.application_criteria.nationalities}
                    onChange={onChange}
                    className="justify-between lg:col-span-2"
                />
            </div>

            {/* طريقة التقديم */}
            <h2 className="lg:col-span-2 !text-[35px] font-bold dark:text-white mt-4">
                بيانات طريقة التقديم :
            </h2>
            <InputField
                label="طريقة التقديم:"
                id="how_to_apply_description"
                name="how_to_apply_description"
                value={scholarshipData.how_to_apply_description}
                onChange={onChange}
                isTextArea
                className="lg:col-span-2"
            />
            <div className="lg:col-span-2 flex justify-end mt-4">
                <ButtonStyle type="submit" text="إضافة المنحة" className="bg-indigo-700" />
            </div>
        </form>
    );
};

export default ScholarshipForm;