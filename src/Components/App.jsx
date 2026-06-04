import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
//import Card from "./Card.jsx";
//import FiltersButtons from "./FiltersButtons";
import Footer from './Footer.jsx';
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./DetailsPage.jsx";
import Dashboard from "./Dashboard.jsx";
import Favoraites from "./favotaites.jsx";


function App() {
return(
    <>
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-50 text-2xl text-slate-950 flex items-center justify-center py-6
                            md:hidden
                            lg:hidden
                            dark:bg-slate-800 dark:text-slate-50">
                <p className="text-indigo-600 font-bold text-5xl 
                                    dark:text-indigo-50">منحَة</p>
            </div>

            <div className="fixed top-20 left-0 right-0 z-50  md:top-0 ">
                <Nav />
            </div>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/detailsPage" element={<DetailsPage />} ></Route>
                <Route path="/dashboard" element={<Dashboard />} ></Route>
                <Route path="/favoraites" element={<Favoraites />}></Route>
            </Routes>
           
            <Footer />
           


        </>


    );
}

export default App