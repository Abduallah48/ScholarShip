import ToggleButton from "./ToggleButton";
import {useState} from 'react';
import LogIn from "./LogIn.jsx";
import AskAI from "../Components/Ask-AI-Components/AskAI.jsx";


function Nav() {
    const [listIsOpen, SetListIsOpen] = useState(false);
    const [isLogedIn, SetIsLogedIn] = useState(false);
    const [askAIClick, SetAskAIClick] = useState(false);
    const [logInClick, SetLogInClick] = useState(false);

    function listIsOpenHandler  () {
        SetListIsOpen(!listIsOpen)
    };
    function askaiIsOpenHandler  () {
        SetAskAIClick(!askAIClick)
    };
    function logInIsOpenHandler  () {
        SetLogInClick(!logInClick)
    };
    return(
        <div className="">
        {!isLogedIn && <div className="flex flex-row-reverse justify-between bg-slate-200 text-slate-950 px-3 py-2 shadow-md shadow-slate-400
                        md:mx-auto md:max-w-5xl
                        lg:mx-auto lg:max-w-7xl
                        dark:bg-slate-900 dark:text-slate-100">
            <div className="hidden md:flex">{ToggleButton()}</div>
            <button onClick={listIsOpenHandler} className="text-2xl md:hidden">
                {listIsOpen ? '✕' : '☰'}
            </button>
            {listIsOpen && <div className="flex fixed top-33 left-2 right-0 flex-col items-end gap-4 pr-6 pb-3 w-45 ml-auto bg-slate-200 pt-5
                                            md:hidden
                                        dark:bg-slate-900 dark:text-slate-100  ">
                <a href="#home" onClick={() => {SetListIsOpen(false)}} 
                        className="font-semibold text-md  px-6 ">الصفحة الرئيسية</a>
                <a href="#about" onClick={() => {SetListIsOpen(false)}}
                        className="font-semibold text-md px-6 ">حول المنصة</a>
                <a href="#contact-us" onClick={() => {SetListIsOpen(false)}}
                        className="font-semibold text-md px-6 ">تواصل معنا</a>
                </div>}
            <div className=" hidden md:flex flex-row items-center
                                        dark:bg-slate-900 dark:text-slate-100  ">
                <a href="#home" 
                        className="font-semibold text-md  px-6 ">الصفحة الرئيسية</a>
                <a href="#about" 
                        className="font-semibold text-md px-6 ">حول المنصة</a>
                <a href="#contact-us" 
                        className="font-semibold text-md px-6 ">تواصل معنا</a>
            </div>
            
            <div className="flex gap-4">
                <button onClick={askaiIsOpenHandler} className=" relative font-bold text-white text-xl bg-indigo-700 rounded-xl px-2 hover:bg-indigo-800 cursor-pointer shadow-xl/20">
                   AI إسأل 
                </button >
                {askAIClick && <AskAI askAIClick= {askAIClick} SetAskAIClick= {SetAskAIClick}/>} 

                <button onClick={logInIsOpenHandler} className=" relativefont-bold text-white text-xl bg-indigo-700 rounded-xl px-2 hover:bg-indigo-800 cursor-pointer shadow-xl/20">
                    سجل دخول  
                </button>
                {logInClick && <LogIn logInClick = {logInClick} SetLogInClick = {SetLogInClick}/>}
            </div>
            <div className="flex md:hidden">{ToggleButton()}</div>
            <p className="text-indigo-600 font-bold text-5xl hidden
            md:flex md:pl-2
            lg:flex lg:pl-4
                                    dark:text-indigo-50">منحَة</p>
                
        </div>

        }
        


        {isLogedIn && <div className="">
        <div className="flex  flex-row-reverse justify-between bg-slate-200 text-slate-950 px-3 py-2 shadow-md shadow-slate-400
                        md:mx-auto md:max-w-5xl
                        lg:mx-auto lg:max-w-7xl
                        dark:bg-slate-900 dark:text-slate-100">
            <div className="hidden md:flex">{ToggleButton()}</div>
            <button onClick={listIsOpenHandler} className="text-2xl md:hidden">
                {listIsOpen ? '✕' : '☰'}
            </button>
            {listIsOpen && <div className="flex fixed top-33  left-2 right-0 flex-col items-end gap-2 pr-6 pb-3 w-38 ml-auto bg-slate-200 pt-3
                                            md:hidden
                                        dark:bg-slate-900 dark:text-slate-100  ">
                <a href="#home" onClick={() => {SetListIsOpen(false)}} 
                        className="font-semibold text-md  px-6 ">Home</a>
                <a href="#about" onClick={() => {SetListIsOpen(false)}}
                        className="font-semibold text-md px-6 ">About</a>
                <a href="#contact-us" onClick={() => {SetListIsOpen(false)}}
                        className="font-semibold text-md px-6 ">Contact Us</a>
                </div>}
            <div className=" hidden md:flex flex-row items-center 
                                        dark:bg-slate-900 dark:text-slate-100  ">
                <a href="#home" 
                        className="font-semibold text-md  px-6 ">Home</a>
                <a href="#about" 
                        className="font-semibold text-md px-6 ">About</a>
                <a href="#contact-us" 
                        className="font-semibold text-md px-6 ">Contact Us</a>
            </div>
            
            <div className="flex gap-6">
                <button className="font-bold text-xl bg-cyan-400 rounded-xl px-2 hover:bg-cyan-500 cursor-pointer shadow-md shadow-cyan-700">
                    Ask AI
                </button>
                <button className="font-bold text-xl bg-slate-400 rounded-full px-1 hover:bg-slate-500 cursor-pointer shadow-md shadow-slate-200
                                    dark:bg-slate-300 dark:hover:bg-slate-400 dark:shadow-slate-400">
                   🔔
                </button>
            </div>
            <div className="flex md:hidden">{ToggleButton()}</div>
            <p className="text-center text-3xl p-2 hidden md:flex">Commute</p>
                
        </div>
        
                
              
        </div>}
                
              
        </div>

        
    );
}

export default Nav;