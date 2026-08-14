import { useState } from "react";
import { useTokenStore } from "../Store/token-store";

function SignUp() {
    const login = useTokenStore((state) => state.login);
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    function nameHandler(e) {
        SetName(e.target.value);
    }
    function emailHandler(e) {
        SetEmail(e.target.value);
    }
    function passwordHandler(e) {
        SetPassword(e.target.value);
    }

    async function formHandler(e) {
        e.preventDefault();
        const formData = {
            name: name,
            email: email,
            password: password
        };

        try {
            const res = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" // 👈 ADD THIS HEADER
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                if (data.data && data.data.token) {
                    login(data.data.token, data.data.user, data.data.user.role, data.data.user.name);
                }
                console.log("Account created successfully", data);
            } else {
                // Now you will see actual validation errors from Laravel here (e.g. 422 Unprocessable Entity)
                console.error("Validation error or server error:", data);
            }
        } catch (error) {
            console.error("Something went wrong!", error);
        }
    }

    return (
        <form onSubmit={formHandler}>
            <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col gap-6 justify-center items-center">
                <p className="text-4xl text-indigo-600 mb-8 font-bold">أنشئ حساب جديد</p>
                <input value={name} onChange={nameHandler} type="text" placeholder="اسم المستخدم" className="flex border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md" />
                <input value={email} onChange={emailHandler} type="email" placeholder="البريد الإلكتروني" className="flex border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md" />
                <input value={password} onChange={passwordHandler} type="password" placeholder="كلمة المرور" className="flex border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md" />
                <button type="submit" className="bg-indigo-600 px-4 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors">
                    إنشاء الحساب
                </button>
            </div>
        </form>
    );
}

export default SignUp;