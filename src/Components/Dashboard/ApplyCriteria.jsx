import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";

const ApplyCriteria = ({ applyCriteria, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}
            className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 text-lg md:text-xl">
            <InputField
                label="العمر المسموح به :"
                id="age"
                name="age"
                value={applyCriteria.age}
                onChange={onChange}
                className="md:items-center"
            />
            <InputField
                label="الجنسيات المسموح بها :"
                id="nationalities"
                name="nationalities"
                rows="5"
                value={applyCriteria.nationalities}
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
                            checked={applyCriteria.gender === "male"}
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
                            checked={applyCriteria.gender === "female"}
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
                            checked={applyCriteria.gender === "both"}
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
            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة"
                />
            </div>
        </form>
    )
}

export default ApplyCriteria;
