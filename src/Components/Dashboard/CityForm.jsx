import InputField from "../InputField.jsx";
import ButtonStyle from "../ButtonStyle";

import useCountries from "../../Hooks/useCountries.js";

const CityForm = ({ cityLinkData, onChange, onSubmit }) => {
    const {countries} = useCountries();

    return (
        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl">
            <InputField
                label="اسم المدينة:"
                id="city_name"
                name="city_name"
                value={cityLinkData.city_name}
                onChange={onChange}
            />
            {/* <InputField
                label="رقم البلد :"
                id="country_id"
                name="country_id"
                value={cityLinkData.country_id}
                type="number"
                onChange={onChange}
            /> */}

            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">البلد:</label>
                <select
                    name="country_id"
                    value={cityLinkData.country_id || ""} // نربطها بالـ State الأساسي
                    onChange={onChange} // نستخدم دالة الأب مباشرة
                    className="text-white flex flex-col md:flex-row gap-2 xl:gap-4 dark:bg-slate-700 overflow-y-auto"
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

            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة"
                />
            </div>
        </form>
    );
};

export default CityForm;