import { useFiltersStore } from "../Store/filters-store";
import {Link} from "react-router-dom";

function Footer() {
    const setCountry = useFiltersStore((state) => state.setCountry);
    return(
        <div id="contact-us" className="grid grid-cols-2 pb-20 bg-purple-100 p-4 gap-2
                                        md:max-w-5xl md:mx-auto
                                        lg:max-w-7xl lg:mx-auto
                                        dark:bg-slate-950 dark:text-white">
            <div className="flex flex-col gap-2 items-center">
                <Link onClick={() => setCountry("إيطاليا")} to="/" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح إيطاليا
                </Link>
                <Link onClick={() => setCountry("ألمانيا")} to="/" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح ألمانيا </Link>
                <Link onClick={() => setCountry("رمانيا")} to="/" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح رمانيا</Link>
                <Link onClick={() => setCountry("هنغاريا")} to="/" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح هنغاريا</Link>
                <Link onClick={() => setCountry("روسيا")} to="/" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح روسيا</Link>
            
                <Link onClick={() => setCountry("تركيا")} to="/" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح تركيا</Link>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className="text-lg text-slate-950 font-bold
                                dark:text-slate-50
                ">تواصل معنا
                </p>
                <div className="flex flex-col gap-4 items-e">
                    <span className="text-lg text-slate-950
                                    dark:text-slate-50"
                    >ِAbdullah1234@gmail.com
                    </span>
                    <span className="text-lg text-slate-950
                                    dark:text-slate-50">+9639876543</span>
                </div>
            </div>
        </div>
    );
}

export default Footer