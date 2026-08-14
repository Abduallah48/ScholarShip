import Nav from "./Nav";

const DetailsCard = ({ img, mainText, secondaryText, className,className2 }) => {
    return (
        <>
            <div className={`bg-indigo-900 flex items-center gap-4 py-4 px-4 rounded-[10px] ${className}`}>
                <img className={`w-[70px] bg-purple-100 p-2 rounded-[40px] ${className2}`} src={img} alt="" />
                <div className="flex flex-col gap-2 md:gap-4 ">
                    <h4 className="text-[15px] text-white lg:text-[25px] font-bold text-neutral-800">{mainText}</h4>
                    <span className="text-neutral-800 text-white font-bold text-[15px] lg:text-[25px]">{secondaryText}</span>
                </div>
            </div>
        </>
    );
};

export default DetailsCard;
