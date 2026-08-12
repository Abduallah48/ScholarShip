
const InputField = ({ label, id,name, type = "text", value, onChange, isTextArea, rows, defaultValue, className = "" }) => {
    const inputStyles = "flex-grow border dark:border-gray-300 rounded-[10px] dark:bg-slate-700 dark:text-white py-2 px-4";

    return (
        <div className={`flex flex-col md:flex-row gap-2 xl:gap-4 ${className}`}>
            <label className="dark:text-white text-[20px] md:text-[30px]" htmlFor={id}>
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    className={inputStyles}
                    id={id}
                    name={name || id}
                    rows={rows || "5"}
                    value={value}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            ) : (
                <input
                    className={inputStyles}
                    id={id}
                    name={name || id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    required
                />
            )}
        </div>
    );
};

export default InputField;