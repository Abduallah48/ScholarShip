import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";

const CountryForm = ({ countryData, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl">
            <InputField
                label="رقم البلد :"
                id="countryNum"
                name="countryNum"
                value={countryData.countryNum}
                type="number"
                onChange={onChange}
            />
            <InputField
                label="التقييم :"
                id="rate"
                name="rate"
                value={countryData.rate}
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

export default CountryForm;