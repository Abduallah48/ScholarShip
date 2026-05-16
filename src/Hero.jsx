import HeroPhoto from "./assets/Hero.jpg";
function Hero() {
    return(
        <div id="home" className="relative bg-center  mt-36 rounded-md   flex items-center justify-center  p-6">
                <img src={HeroPhoto} alt="Hero" className=" h-full w-full object-cover object-center"/>
                <p className="absolute  text-slate-950 dark:text-slate-50 font-bold  text-lg
                                    md:text-2xl 
                                    lg:text-3xl">
                    اكتشف أفضل المنح الدراسية المتاحة حول العالم مع موقعنا. نحن نقدم لك فرصة الوصول إلى مجموعة واسعة من المنح الدراسية التي تغطي مختلف التخصصات والمستويات الأكادمية
                </p>
            </div>
    );
}

export default Hero