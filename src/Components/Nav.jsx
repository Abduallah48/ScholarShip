import ToggleButton from "./ToggleButton";
import { useState } from 'react';
import LogIn from "./LogIn.jsx";
import AskAI from "../Components/Ask-AI-Components/AskAI.jsx";
import { Link } from "react-router-dom";
import { useTokenStore } from "../Store/token-store.js";


function Nav() {
        const token = useTokenStore((state) => state.token);
        const role = useTokenStore((state) => state.role);
        const name = useTokenStore((state) => state.name);
        const logout = useTokenStore((state) => state.logout);

        const [listIsOpen, SetListIsOpen] = useState(false);

        const [askAIClick, SetAskAIClick] = useState(false);
        const [logInClick, SetLogInClick] = useState(false);

        function listIsOpenHandler() {
                SetListIsOpen(!listIsOpen)
        };
        function askaiIsOpenHandler() {
                SetAskAIClick(!askAIClick)
        };
        function logInIsOpenHandler() {
                SetLogInClick(!logInClick)
        };
        return (
                <div className="">
                        <div className="flex flex-row-reverse justify-between bg-slate-200 text-slate-950 px-3 py-2 shadow-md shadow-slate-400
                        md:mx-auto md:max-w-5xl
                        lg:mx-auto lg:max-w-7xl
                        dark:bg-slate-900 dark:text-slate-100">
                                <div className="hidden md:flex">{ToggleButton()}</div>
                                <button onClick={listIsOpenHandler} className="text-2xl md:hidden">
                                        {listIsOpen ? '✕' : '☰'}
                                </button>
                                {listIsOpen && <div className="flex fixed top-33 left-2 right-0 flex-col items-end gap-4 pr-6 pb-3 w-50 ml-auto bg-slate-200 pt-5
                                            md:hidden
                                        dark:bg-slate-900 dark:text-slate-100  ">
                                        {token !== null && <button onClick={() => logout()} className="group font-semibold text-md  px-6">
                                                <span className="group-hover:hidden font-semibold text-md">{name}</span>
                                                <span className="hidden group-hover:inline group-hover:text-bold group-hover:cursor-pointer group-hover:text-lg"> اضغط لتسجيل الخروج</span>
                                        </button>}
                                        <a href="#home" onClick={() => { SetListIsOpen(false) }}
                                                className="font-semibold text-md  px-6 ">الصفحة الرئيسية</a>
                                        <a href="#about" onClick={() => { SetListIsOpen(false) }}
                                                className="font-semibold text-md px-6 ">حول المنصة</a>
                                        <a href="#contact-us" onClick={() => { SetListIsOpen(false) }}
                                                className="font-semibold text-md px-6 ">تواصل معنا</a>
                                        {role === "admin" && <Link to="/dashboard" className="font-semibold text-md px-6" onClick={() => { SetListIsOpen(false) }} >
                                                لوحة التحكم
                                        </Link>}
                                        {token !== null && <Link to="/favoraites"
                                                className="font-semibold text-md px-6">المفضلة</Link>}
                                </div>}
                                <div className=" hidden md:flex flex-row items-center
                                        dark:bg-slate-900 dark:text-slate-100  ">
                                        {token !== null && <button onClick={() => logout()} className="group font-semibold text-md  px-6">
                                                <span className="group-hover:hidden font-semibold text-md">{name}</span>
                                                <span className="hidden group-hover:inline group-hover:text-bold group-hover:cursor-pointer group-hover:text-lg"> اضغط لتسجيل الخروج</span>
                                        </button>}
                                        <a href="#home"
                                                className="font-semibold text-md  px-6 ">الصفحة الرئيسية</a>
                                        <a href="#about"
                                                className="font-semibold text-md px-6 ">حول المنصة</a>
                                        <a href="#contact-us"
                                                className="font-semibold text-md px-6 ">تواصل معنا</a>
                                        {role === "admin" && <Link to="/dashboard"
                                                className="font-semibold text-md px-6 ">لوحة التحكم</Link>}
                                        {token !== null && <Link to="/favoraites"
                                                className="font-semibold text-md px-6">المفضلة</Link>}
                                </div>

                                <div className="flex gap-4">
                                        <button onClick={askaiIsOpenHandler} className=" relative font-bold text-white text-xl bg-indigo-700 rounded-xl px-2 hover:bg-indigo-800 cursor-pointer shadow-xl/20">
                                                AI إسأل
                                        </button >
                                        {askAIClick && <AskAI askAIClick={askAIClick} SetAskAIClick={SetAskAIClick} />}

                                        {token === null && <div className="flex">
                                                <button onClick={logInIsOpenHandler} className=" relative font-bold text-white text-xl bg-indigo-700 rounded-xl px-2 hover:bg-indigo-800 cursor-pointer shadow-xl/20">
                                                        سجل دخول
                                                </button>
                                                {logInClick && <LogIn logInClick={logInClick} SetLogInClick={SetLogInClick} />}
                                        </div>}
                                        {token !== null && <div className="flex">
                                                <button className="font-bold text-xl bg-slate-400 rounded-full px-1 hover:bg-slate-500 cursor-pointer shadow-md shadow-slate-200
                                                  dark:bg-slate-300 dark:hover:bg-slate-400 dark:shadow-slate-400">
                                                        🔔
                                                </button>
                                        </div>}
                                </div>
                                <div className="flex md:hidden">{ToggleButton()}</div>
                                <p className="text-indigo-600 font-bold text-5xl hidden
            md:flex md:pl-2
            lg:flex lg:pl-4
                                    dark:text-indigo-50">منحَة</p>

                        </div>

                </div>


        );
}

export default Nav;