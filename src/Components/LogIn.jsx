import {useState} from "react";
import SignUp from "./signUp";
function LogIn({logInClick, SetLogInClick}) {
    const [logState, SetLogState] = useState("logIn");
    const goToSignUp = () => SetLogState("SignUp");
    return(
        <div className=" bg-black/50 fixed inset-0  flex flex-col  gap-8 justify-center">
            <button onClick={() => SetLogInClick(!logInClick)} className="text-4xl text-white cursor-pointer ml-auto pr-8 pt-8">
                ✕
            </button>
            {logState === "logIn" && <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col gap-6 justify-center items-center ">
                    <p className="text-4xl text-indigo-600 mb-8 font-bold">قم بتسجيل الدخول</p>
                    
                    <input type = "email" placeholder="البريد الإلكتروني" className="flex  border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md "/>
                    <input type = "password" placeholder="كلمة المرور" className="flex  border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md "/>
                    <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors">تسجيل الدخول</button>
                    <div className="flex flex-row-reverse justify-center items-center gap-2">
                        <p className="text-lg text-center text-indigo-600 mb-8 font-bold pt-6">ليس لديك حساب؟</p>
                        <button onClick={goToSignUp} className="bg-indigo-600 px-4 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors">قم بأنشاء حساب جديد</button>
                    </div>

            </div>}
            {logState === "SignUp" && <SignUp />}

        </div>
    );
}

export default LogIn