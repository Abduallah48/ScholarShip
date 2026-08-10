import {useState} from "react";
import SignUp from "./signUp";
import { useTokenStore } from "../Store/token-store";

function LogIn({logInClick, SetLogInClick}) {
    const login = useTokenStore((state) => state.login);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [logState, SetLogState] = useState("logIn");
    const goToSignUp = () => SetLogState("SignUp");

    function passwordHnadler(e) {
        setPassword(e.target.value);
    }
    function emailHnadler(e) {
        setEmail(e.target.value);
    }

    async function formHandler(e) {
        e.preventDefault();
        const formData = {
            password: password,
            email: email
        };
        try {
            const res = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            if(res.ok){
                const data = await res.json();
                if(data.data && data.data.token) {
                    login(data.data.token, data.data.user, data.data.user.role, data.data.user.name);
                }
                console.log("Log in succisfully done")
            }
            else{
                console.log("somthing wrong with fetch", res.status)
            }
        }
        catch(error) {
            console.error("Connection failed ",error);
        }

    }

    return(
        <div className=" bg-black/50 fixed inset-0  flex flex-col  gap-8 justify-center">
            <button onClick={() => SetLogInClick(!logInClick)} className="text-4xl text-white cursor-pointer ml-auto pr-8 pt-8">
                ✕
            </button>
            {logState === "logIn" && <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col gap-6 justify-center items-center ">
                    <p className="text-4xl text-indigo-600 mb-8 font-bold">قم بتسجيل الدخول</p>
                    <form onSubmit={formHandler} className="flex flex-col gap-2 justify-center items-center">
                        
                    <input onChange={(e) => emailHnadler(e)} type = "email" placeholder="البريد الإلكتروني" className="flex text-right  border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md "/>
                    <input onChange={(e) => passwordHnadler(e)} type = "password" placeholder="كلمة المرور" className="flex text-right  border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md "/>
                    <button type="submit" className="bg-indigo-600  px-4 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors">تسجيل الدخول</button>
                    
                    </form >
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