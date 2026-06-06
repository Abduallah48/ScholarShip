//import Card from "./Card.jsx";
//import Nav from "./Nav.jsx"
//import Footer from "./Footer.jsx";
import FiltersButtons from "./FiltersButtons.jsx";
import ScholarshipSection from './ScholarshipSection.jsx';
import Hero from './Hero.jsx';
import About from "./About.jsx";
import { useNavigate } from "react-router-dom";





function Home() {

    return(
        <div  className="flex flex-col   bg-purple-100 gap-8 
                        md:mx-auto md:max-w-5xl
                        lg:mx-auto lg:max-w-7xl
                        dark:bg-slate-950">
            
            <Hero />
            
            
            <div>
                <FiltersButtons />
            </div>
            
            <ScholarshipSection />

            <About />
            <hr className="text-2xl text-indigo-800 dark:text-white"/>
            

        </div>
    );
}

export default Home