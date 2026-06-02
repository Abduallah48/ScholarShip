import CV from "./CV.jsx";
import Motvation from "./Motivation.jsx";
import Letter from "./Letter.jsx";
import {useState} from "react";

function Documents({OnGoToHome}) {
    const [docScreen, SetDocScreen] = useState("Documents");
    const GoToCV = () => SetDocScreen("CV");
    const GoToMotivation = () => SetDocScreen("Motivation");
    const GoToLetter = () => SetDocScreen("Letter");
    const GoBackDoc = () => SetDocScreen("Documents");
    return(
        <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col gap-6 justify-center items-center ">
            
            {docScreen === "Documents" &&   <div className=" flex flex-col gap-8">
                                                    <button onClick={OnGoToHome} className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto absolute top-4 left-4">← رجوع</button>
                                                    <p className="text-3xl text-center text-indigo-800 font-bold pb-12">إختر الورقة التي تحتاج فيها مساعدة</p>
                                                    <div className="flex gap-4">
                                                        <button onClick={GoToCV} className="bg-indigo-300 px-4 py-2 rounded-2xl border border-indigo-500 text-lg font-bold text-indigo-700 cursor-pointer hover:shadow-md shadow-indigo-300">CV</button>
                                                        <button onClick={GoToMotivation} className="bg-indigo-300 px-4 py-2 rounded-2xl border border-indigo-500 text-lg font-bold text-indigo-700 cursor-pointer hover:shadow-md shadow-indigo-300">Motivation Letter</button>
                                                        <button onClick={GoToLetter} className="bg-indigo-300 px-4 py-2 rounded-2xl border border-indigo-500 text-lg font-bold text-indigo-700 cursor-pointer hover:shadow-md shadow-indigo-300">Recomendation Letter</button>
                                                    </div>
                                            </div>}
            {docScreen === "CV" && <CV onGoBackDoc = {GoBackDoc}/>}
            {docScreen === "Motivation" && <Motvation onGoBackDoc = {GoBackDoc}/>}
            {docScreen === "Letter" && <Letter onGoBackDoc = {GoBackDoc}/>}
        </div>
    );
}

export default Documents