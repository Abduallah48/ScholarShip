import InputField from "../InputField.jsx";
import ButtonStyle from "../ButtonStyle";

const CityForm = ({ cityLinkData, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 lg:gap-x-8 text-lg md:text-xl">
            <InputField
                label="المدينة :"
                id="cityName"
                name="cityName"
                value={cityLinkData.cityName}
                onChange={onChange}
            />
            <InputField
                label="رقم البلد :"
                id="countryId"
                name="countryId"
                value={cityLinkData.countryId}
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

export default CityForm;