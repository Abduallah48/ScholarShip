
const ButtonStyle = ({text,bgColor,className}) => {
    return (
        <div className="flex justify-center items-end">
            <button className={`w-80 px-[40px] py-[10px] text-[15px] md:text-[20px] font-bold rounded-[30px] text-neutral-800 shadow-xl/30 ${className}`} style={{backgroundColor:bgColor}}>{text}</button>
        </div>
    )
}

export default ButtonStyle
