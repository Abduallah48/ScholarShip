
function Footer() {
    return(
        <div id="contact-us" className="grid grid-cols-2 pb-20 bg-purple-100 p-4
                                        md:max-w-5xl md:mx-auto
                                        lg:max-w-7xl lg:mx-auto
                                        dark:bg-slate-950 dark:text-white">
            <div className="flex flex-col gap-2 items-center">
                <a href="#" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح ايطاليا
                </a>
                <a href="#" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح المانيا </a>
                <a href="#" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح رمانيا</a>
                <a href="#" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح هنغاريا</a>
                <a href="#" className="text-lg text-slate-950
                                        dark:text-slate-50
                ">منح روسيا</a>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <p className="text-lg text-slate-950
                                dark:text-slate-50
                ">للتواصل معنا:
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