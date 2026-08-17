const ButtonStyle = ({onClick, text, className }) => {
    return (
        <div className="flex justify-center items-end">
            <button onClick={onClick}
                className={`relative font-bold text-white text-xl rounded-xl 
                py-2 w-44 min-w-[170px] flex items-center justify-center
                hover:bg-indigo-800 cursor-pointer shadow-xl/20 ${className}`}
            >
                {text}
            </button>
        </div>
    );
};

export default ButtonStyle;