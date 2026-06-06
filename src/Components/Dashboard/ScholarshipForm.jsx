import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";

const ScholarshipForm = ({ scholarshipData, onChange, onSubmit }) => {
    return (
        <form
            className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl"
            onSubmit={onSubmit}
        >
            <InputField
                label="اسم المنحة :"
                id="name"
                name="name"
                value={scholarshipData.name}
                onChange={onChange}
            />
            <InputField
                label="بلد المنحة :"
                id="country"
                name="country"
                value={scholarshipData.country}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="المدينة :"
                id="city"
                name="city"
                value={scholarshipData.city}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="درجة التأهيل :"
                id="degree"
                name="degree"
                value={scholarshipData.degree}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="التمويل :"
                id="finance"
                name="finance"
                value={scholarshipData.finance}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="الفرع العام :"
                id="field"
                name="field"
                value={scholarshipData.field}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="الاختصاص :"
                id="specialization"
                name="specialization"
                value={scholarshipData.specialization}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="تاريخ انتهاء التقديم :"
                id="finalDate"
                name="finalDate"
                type="date"
                value={scholarshipData.finalDate}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="وصف المنحة :"
                id="desc"
                name="desc"
                isTextArea
                rows="5"
                value={scholarshipData.desc}
                onChange={onChange}
                className="justify-between"
            />
            <InputField
                label="الجنسيات المسموح بها :"
                id="nationalities"
                name="nationalities"
                isTextArea
                rows="5"
                value={scholarshipData.nationalities}
                onChange={onChange}
                className="justify-between"
            />

            <div className="flex flex-col md:flex-row gap-5 md:gap-20 text-base md:text-lg">
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
                            checked={scholarshipData.gender === "male"}
                            onChange={onChange}
                        />
                        <label
                            className="dark:text-white text-[20px] md:text-[30px]"
                            htmlFor="male"
                        >
                            ذكور فقط
                        </label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input
                            name="gender"
                            id="female"
                            type="radio"
                            value="female"
                            checked={scholarshipData.gender === "female"}
                            onChange={onChange}
                        />
                        <label
                            className="dark:text-white text-[20px] md:text-[30px]"
                            htmlFor="female"
                        >
                            إناث فقط
                        </label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input
                            name="gender"
                            id="both-gender"
                            type="radio"
                            value="both"
                            checked={scholarshipData.gender === "both"}
                            onChange={onChange}
                        />
                        <label
                            className="dark:text-white text-[20px] md:text-[30px]"
                            htmlFor="both-gender"
                        >
                            كلا الجنسين
                        </label>
                    </div>
                </div>
            </div>

            <InputField
                label="العمر المسموح به :"
                id="age"
                name="age"
                value={scholarshipData.age}
                onChange={onChange}
            />
            <InputField
                label="لغة كورس المنحة :"
                id="schoolarshipLang"
                name="schoolarshipLang"
                value={scholarshipData.schoolarshipLang}
                onChange={onChange}
                className="gap-5"
            />
            <InputField
                label="رابط المنحة :"
                id="schoolarshipURL"
                name="schoolarshipURL"
                value={scholarshipData.schoolarshipURL}
                onChange={onChange}
            />

            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة المنحة"
                />
            </div>
        </form>
    );
};

export default ScholarshipForm;
