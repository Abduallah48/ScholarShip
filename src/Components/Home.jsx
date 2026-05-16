//import Card from "./Card.jsx";
//import Nav from "./Nav.jsx"
//import Footer from "./Footer.jsx";
import FiltersButtons from "./FiltersButtons.jsx";
import ScholarshipSection from './ScholarshipSection.jsx';
import Hero from './Hero.jsx';
import "@fontsource/tajawal/400.css";
import "@fontsource/tajawal/500.css";
import "@fontsource/tajawal/700.css";
import "@fontsource/tajawal/800.css";




function Home() {
    return(
        <div  className="flex flex-col   bg-purple-100 gap-8 
                         md:mx-auto md:max-w-5xl
                         lg:mx-auto lg:max-w-7xl
                         dark:bg-slate-950">
            {/* <div className="fixed top-0 left-0 right-0 z-50 bg-slate-50 text-2xl text-slate-950 flex items-center justify-center py-6
                             md:hidden
                             lg:hidden
                             dark:bg-slate-800 dark:text-slate-50">
                <h2 className="">Cummute</h2>
            </div>
            <div className="fixed top-20 left-0 right-0 z-50  md:top-0 ">
                <Nav />
            </div> */}
            
            <Hero />
            
            
            <div>
                <FiltersButtons />
            </div>
            
            <ScholarshipSection />

            <div id="about" className="p-6">
                <p className="text-slate-950 text-center text-lg dark:text-slate-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque reiciendis similique dicta commodi neque iste voluptas deleniti. Dolorum debitis fugiat, velit a reprehenderit quis tempora laboriosam quisquam asperiores esse.</p>
            </div>
            <hr className="text-2xl text-slate-950 dark:text-white"/>
            

        </div>
    );
}

export default Home