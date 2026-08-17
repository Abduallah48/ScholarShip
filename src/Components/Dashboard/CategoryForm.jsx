import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";


const CategoryForm = ({ categoryData, onChange, onSubmit }) => {

    return (
        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl">
            <InputField
                label="التصنيف :"
                id="category_name"
                name="category_name"
                value={categoryData.category_name}
                onChange={onChange}
                className="lg:col-span-2"
            />
            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة"
                    className="bg-indigo-700"
                />
            </div>
        </form>
    );
};

export default CategoryForm;