import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";
import useCategories from "../../Hooks/useCategories";

const SpecForm = ({ specData, onChange, onSubmit }) => {
const {categories} = useCategories();

    return (
        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl">
            <InputField
                label="الاختصاص :"
                id="specialization_name"
                name="specialization_name"
                value={specData.specialization_name}
                onChange={onChange}
            />
            {/* <InputField
                label="رقم التصنيف :"
                id="category_id"
                name="category_id"
                value={specData.category_id}
                type="number"
                onChange={onChange}
            /> */}
            <div className="flex gap-2">
                <label className="dark:text-white text-[20px] md:text-[30px]">الفرع العام :</label>
                <select
                    name="category_id"
                    value={specData.category_id || ""}
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

            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة"
                />
            </div>
        </form>
    );
};

export default SpecForm;