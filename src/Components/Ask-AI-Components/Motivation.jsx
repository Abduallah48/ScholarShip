import { useState } from "react";

const MotSteps = [
    { id: "language", placeholder: "أدخل اللغة (arabic/english)" },
    { id: "full_name", placeholder: "أدخل اسمك الكامل" },
    { id: "email", placeholder: "أدخل بريدك الإلكتروني" },
    { id: "phone", placeholder: "أدخل رقم هاتفك" },
    { id: "age", placeholder: "أدخل عمرك" },
    { id: "scholarship_name", placeholder: "أدخل اسم المنحة" },
    { id: "university", placeholder: "أدخل اسم الجامعة" },
    { id: "specialization", placeholder: "أدخل الاختصاص" },
    { id: "country", placeholder: "أدخل اسم البلد" }
];

function Motivation({ onGoBackDoc }) {
    const [motStepIndex, setMotStepIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [motForm, setMotForm] = useState({
        language: "",
        full_name: "",
        email: "",
        phone: "",
        age: "",
        scholarship_name: "",
        university: "",
        specialization: "",
        country: ""
    });
    const [motResult, setMotResult] = useState(null);

    const currentStep = MotSteps[motStepIndex];

    async function motFetched(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            console.log("Sending Motivation data:", motForm);

            const res = await fetch("http://127.0.0.1:8000/api/generate-motivation-letter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/pdf"
                },
                body: JSON.stringify(motForm)
            });

            if (res.ok) {
                const data = await res.blob();
                if (data) {
                    const pdfURL = URL.createObjectURL(data);
                    setMotResult(pdfURL);
                }
            } else {
                const errorText = await res.text();
                console.log("status is not ok", res.status, errorText);
                alert(`حدث خطأ: ${res.status}\n${errorText}`);
            }
        } catch (error) {
            console.error("something went wrong", error);
            alert("فشل الاتصال بالخادم. تأكد من تشغيل الخادم ومشكلة CORS.");
        } finally {
            setIsLoading(false);
        }
    }

    function motFormHandler(e) {
        const value = e.target.value;
        setMotForm(m => ({ ...m, [currentStep.id]: value }));
    }

    function nextStep(e) {
        const currentValue = motForm[currentStep.id];
        if (!currentValue || currentValue.toString().trim() === "") {
            alert("أدخل المعلومات المطلوبة");
            return;
        }

        if (currentStep.id === "language") {
            const lang = currentValue.trim().toLowerCase();
            if (lang !== "arabic" && lang !== "english") {
                alert("اللغة يجب أن تكون 'arabic' أو 'english'");
                return;
            }
        }

        if (motStepIndex < MotSteps.length - 1) {
            setMotStepIndex(motStepIndex + 1);
        } else {
            motFetched(e);
        }
    }

    function resetForm() {
        setMotForm({
            language: "",
            full_name: "",
            email: "",
            phone: "",
            age: "",
            scholarship_name: "",
            university: "",
            specialization: "",
            country: ""
        });
        setMotStepIndex(0);
        setMotResult(null);
    }

    return (
        <div className="flex flex-col gap-2 w-full h-full pt-12">
            <button
                onClick={() => {
                    if (motResult) {
                        URL.revokeObjectURL(motResult);
                    }
                    onGoBackDoc();
                    resetForm();
                }}
                className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto absolute top-4 left-4"
            >
                ← رجوع
            </button>

            <div className="flex flex-col flex-1 border border-indigo-800 rounded-lg overflow-y-auto p-4">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-800 mx-auto"></div>
                            <p className="mt-4 text-indigo-800">جاري إنشاء رسالة الدوافع...</p>
                        </div>
                    </div>
                ) : motResult !== null ? (
                    <iframe src={motResult} frameBorder="0" className="w-full h-full"></iframe>
                ) : (
                    <div className="flex items-center justify-center h-full text-indigo-800">
                        <div className="text-center">
                            <p className="text-lg font-bold">الخطوة {motStepIndex + 1} من {MotSteps.length}</p>
                            <p className="text-sm mt-2 text-indigo-600">{currentStep.placeholder}</p>
                            {motForm[currentStep.id] && (
                                <p className="mt-4 text-indigo-950 bg-indigo-100 p-2 rounded">
                                    {motForm[currentStep.id]}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex w-full mt-auto">
                {motResult !== null ? (
                    <div className="flex flex-row-reverse gap-4 w-full">
                        <a
                            href={motResult}
                            download
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mr-auto"
                        >
                            ⬇️ تحميل الرسالة
                        </a>
                        <button
                            onClick={resetForm}
                            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            🔄 إنشاء جديدة
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-row-reverse gap-4 w-full">
                        <input
                            type="text"
                            placeholder={currentStep.placeholder}
                            onChange={motFormHandler}
                            value={motForm[currentStep.id] || ""}
                            className="flex flex-1 border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 text-right"
                            disabled={isLoading}
                        />
                        <button
                            onClick={nextStep}
                            className="bg-indigo-600 px-6 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {motStepIndex === MotSteps.length - 1 ? "إنشاء" : "إرسال"}
                        </button>
                    </div>
                )}
            </div>

            <div className="flex justify-center gap-1 mt-2">
                {MotSteps.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            index === motStepIndex ? 'w-6 bg-indigo-800' :
                            index < motStepIndex ? 'w-4 bg-indigo-400' : 'w-4 bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Motivation;