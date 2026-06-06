import InputField from "../InputField";
import ButtonStyle from "../ButtonStyle";

const ReviewForm = ({ reviewData, onChange, onSubmit }) => {
    return (
        <form
            className="grid lg:grid-cols-2 gap-2 xl:gap-5 xl:gap-x-14 text-lg md:text-xl"
            onSubmit={onSubmit}
        >
            <InputField
                label="رقم المنحة :"
                id="schoolarshipNum"
                name="schoolarshipNum"
                value={reviewData.schoolarshipNum}
                type="number"
                onChange={onChange}
            />
            <InputField
                label="اسم الطالب :"
                id="schoolarshipStuName"
                name="schoolarshipStuName"
                value={reviewData.schoolarshipStuName}
                onChange={onChange}
                className="gap-5"
            />
            <InputField
                label="تجربة الطالب :"
                id="review"
                name="review"
                isTextArea
                value={reviewData.review}
                onChange={onChange}
                className="lg:col-span-2"
            />
            <div className="lg:col-span-2 flex justify-end">
                <ButtonStyle
                    text="إضافة"
                />
            </div>
        </form>
    );
};

export default ReviewForm;
