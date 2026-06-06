import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";

const SpecForm = ({ specData, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl">
            <InputField
                label="الاختصاص :"
                id="specName"
                name="specName"
                value={specData.specName}
                onChange={onChange}
            />
            <InputField
                label="رقم التصنيف :"
                id="categoryId"
                name="categoryId"
                value={specData.categoryId}
                type="number"
                onChange={onChange}
            />
            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة"
                />
            </div>
        </form>
    );
};

export default SpecForm;