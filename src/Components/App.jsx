import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
//import Card from "./Card.jsx";
//import FiltersButtons from "./FiltersButtons";
import Footer from './Footer.jsx';
import darkLogo from "../assets/photo_2026-06-02_11-38-56-removebg-preview (1).png";
import lightLogo from "../assets/photo_2026-06-02_11-38-53-removebg-preview.png";
import Dashboard from "./Dashboard.jsx";
import DetailsPage from "./DetailsPage.jsx";

function App() {
    return (
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

            {/* <Home /> */}
            <Dashboard />
            <DetailsPage/>
            <Footer />



        </>


    );
}

export default App