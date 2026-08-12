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
                label="الجهة المانحة :"
                id="donor"
                name="donor"
                value={scholarshipData.donor}
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
                label="تاريخ بداية التقديم :"
                id="beginDate"
                name="beginDate"
                type="date"
                value={scholarshipData.beginDate}
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
            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة المنحة"
                />
            </div>
        </form>
    );
};

export default ScholarshipForm;
