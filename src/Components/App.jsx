import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
//import Card from "./Card.jsx";
//import FiltersButtons from "./FiltersButtons";
import Footer from './Footer.jsx';


function App() {
return(
    <>
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-50 text-2xl text-slate-950 flex items-center justify-center py-6
                            md:hidden
                            lg:hidden
                            dark:bg-slate-800 dark:text-slate-50">
                <img src={lightLogo} alt="Logo" className="fixed top-0 right-0 left-0 w-full h-32 object-contain dark:hidden
                                                            md:hidden
                                                            lg:hidden"/>
                <img src={darkLogo} alt="Dark Logo" className="hidden fixed top-0 right-0 left-0 w-full h-32 object-contain dark:block
                                                                md:hidden
                                                                lg:hidden"/>
            </div>
            <div className="fixed top-20 left-0 right-0 z-50  md:top-0 ">
                <Nav />
            </div>

            <Home />
            <Footer />



        </>


    );
}

export default App