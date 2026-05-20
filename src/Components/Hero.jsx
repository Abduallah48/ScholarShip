import HeroPhoto from "../assets/Hero.jpg";
function Hero() {
    return(
        <div id="home" className="relative bg-center  mt-36 rounded-md   flex items-center justify-center  p-6 ">
                <img src={HeroPhoto} alt="Hero" className=" h-full w-full object-cover object-center opacity-40"/>
                <p className="absolute  text-slate-950 dark:text-slate-50 font-bold  text-lg mx-auto text-center 
                                    md:text-2xl 
                                    lg:text-3xl">
                                        منحتك بين يديك... ابحث, اكتشف وخطط لمستقبلك.. في مكان واحد
                </p>
            </div>
    );
}

export default Hero