import { useState } from "react";

const CVSteps = [
    { id: "language", placeholder: "أدخل اللغة (arabic/english)" },
    { id: "full_name", placeholder: "أدخل اسمك الكامل" },
    { id: "email", placeholder: "أدخل بريدك الإلكتروني" },
    { id: "phone", placeholder: "أدخل رقم هاتفك (اختياري)" },
    { id: "languages", placeholder: "أدخل اللغات مفصولة بفاصلة (مثال: Arabic,English)" },
    { id: "skills", placeholder: "أدخل مهاراتك مفصولة بفاصلة (مثال: React,Python)" },
    { id: "age", placeholder: "أدخل عمرك" },
    { id: "specialization", placeholder: "أدخل اختصاصك" },
    { id: "bio", placeholder: "أدخل نبذة عنك (20 حرف على الأقل)" },
];

function CV({ onGoBackDoc }) {

    const [CVStepIndex, setCVStepIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [CVForm, setCVForm] = useState({
        language: "",
        full_name: "",
        email: "",
        phone: "",
        languages: "",
        skills: "",
        age: "",
        specialization: "",
        bio: "",
    });
    const [CVResult, setCVResult] = useState(null);

    async function CVFetched(e) {
        e.preventDefault();
        setIsLoading(true);
        try {

            const formData = {
                ...CVForm,
                languages: CVForm.languages.split(',').map(item => item.trim()).filter(item => item !== ''),
                skills: CVForm.skills.split(',').map(item => item.trim()).filter(item => item !== ''),
            };

            console.log("Sending data:", formData);

            const res = await fetch("http://127.0.0.1:8000/api/generate-cv", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/pdf",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                const data = await res.blob();
                if (data) {
                    const pdfUrl = URL.createObjectURL(data);
                    setCVResult(pdfUrl);
                }
            } else {

                const errorText = await res.text();
                console.log("status is not ok", res.status, errorText);
                alert(`حدث خطأ: ${res.status}\n${errorText}`);
            }
        } catch (error) {
            console.error("something went wrong ", error);
            alert("فشل الاتصال بالخادم. تأكد من تشغيل الخادم.");
        } finally {
            setIsLoading(false);
        }
    }

    const currentStep = CVSteps[CVStepIndex];

    function nextStep(e) {
        const currentValue = CVForm[currentStep.id];
        if (!currentValue || currentValue.trim() === "") {
            alert("أدخل المعلومات المطلوبة");
            return;
        }

        // ✅ تحقق خاص لحقل bio
        if (currentStep.id === "bio" && currentValue.trim().length < 20) {
            alert("نبذة التعريف يجب أن تكون 20 حرف على الأقل");
            return;
        }

        // ✅ تحقق خاص لحقل language
        if (currentStep.id === "language") {
            const lang = currentValue.trim().toLowerCase();
            if (lang !== "arabic" && lang !== "english") {
                alert("اللغة يجب أن تكون 'arabic' أو 'english'");
                return;
            }
        }

        if (CVStepIndex < CVSteps.length - 1) {
            setCVStepIndex(CVStepIndex + 1);
        } else {
            // في الخطوة الأخيرة، نرسل البيانات
            CVFetched(e);
        }
    };

    function CVFormHandler(e) {
        const value = e.target.value;
        setCVForm(c => ({ ...c, [currentStep.id]: value }));
    };

    // ✅ دالة لإعادة تعيين النموذج
    function resetForm() {
        setCVForm({
            language: "",
            full_name: "",
            email: "",
            phone: "",
            languages: "",
            skills: "",
            age: "",
            specialization: "",
            bio: "",
        });
        setCVStepIndex(0);
        setCVResult(null);
    }

    return (
        <div className="flex flex-col gap-2 w-full h-full pt-12">
            <button
                onClick={() => {
                    if (CVResult) {
                        URL.revokeObjectURL(CVResult);
                    }
                    onGoBackDoc();
                    resetForm(); // ✅ إعادة تعيين النموذج عند الرجوع
                }}
                className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto absolute top-4 left-4"
            >
                ← رجوع
            </button>

            <div className="flex flex-col flex-1 border border-indigo-800 rounded-lg overflow-y-auto p-4">
                {isLoading ? (
                    // ✅ عرض حالة التحميل
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-800 mx-auto"></div>
                            <p className="mt-4 text-indigo-800">جاري إنشاء السيرة الذاتية...</p>
                        </div>
                    </div>
                ) : CVResult !== null ? (
                    <iframe src={CVResult} frameBorder="0" className="w-full h-full"></iframe>
                ) : (
                    // ✅ عرض معلومات الخطوة الحالية
                    <div className="flex items-center justify-center h-full text-indigo-800">
                        <div className="text-center">
                            <p className="text-lg font-bold">الخطوة {CVStepIndex + 1} من {CVSteps.length}</p>
                            <p className="text-sm mt-2 text-indigo-600">{currentStep.placeholder}</p>
                            {CVForm[currentStep.id] && (
                                <p className="mt-4 text-indigo-950 bg-indigo-100 p-2 rounded">
                                    {CVForm[currentStep.id]}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="flex w-full mt-auto">
                {CVResult !== null ? (
                    <div className="flex flex-row-reverse gap-4 w-full">
                        <a
                            href={CVResult}
                            download
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mr-auto"
                        >
                            ⬇️ تحميل السيرة الذاتية
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
                            onChange={CVFormHandler}
                            value={CVForm[currentStep.id] || ""}
                            className="flex flex-1 border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            disabled={isLoading} 
                        />
                        <button
                            onClick={nextStep}
                            className="bg-indigo-600 px-6 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading} 
                        >
                            {CVStepIndex === CVSteps.length - 1 ? "إنشاء" : "إرسال"}
                        </button>
                    </div>
                )}
            </div>

            <div className="flex justify-center gap-1 mt-2">
                {CVSteps.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${index === CVStepIndex ? 'w-6 bg-indigo-800' :
                            index < CVStepIndex ? 'w-4 bg-indigo-400' : 'w-4 bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default CV;

