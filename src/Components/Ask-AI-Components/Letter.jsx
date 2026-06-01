import {useState} from "react";

const letterSteps = [
    {id: "doctorName", placeholder: "أدخل اسم الدكتور"},
    {id: "doctorEmail", placeholder: "أدخل البريد الالكتروني للدكتور"},
    {id: "fullName", placeholder: "أدخل اسمك الكامل"},
    {id: "age", placeholder: "أدخل عمرك"},
    {id: "specialization", placeholder: "أدخل اختصاصك"},
];

function Letter({onGoBackDoc}) {
    const [letterStepsIndex, SetLetterStepsIndex] = useState(0);
    const [letterForm, SetLetterForm] = useState({
        doctorName: "",
        doctorEmail: "",
        fullName: "",
        age: "",
        specialization: "",
    });

    const currentStep = letterSteps[letterStepsIndex];

    function nextStep() {
        const currentValue = letterForm[currentStep.id];
        if(!currentValue || currentValue.trim() === ""){
            alert("أدخل المعلومات المطلوبة");
            return;
        }
        if(letterStepsIndex < letterSteps.length - 1)
            SetLetterStepsIndex(letterStepsIndex + 1);
        else {
            alert("انتهت عمليات الاضافة");
        }
            
    };

    function letterFormHandler(e) {
        const value = e.target.value;
        
            SetLetterForm(l => ({...l, [currentStep.id]: value}));
        
    }

    return(
        <div className="flex flex-col w-full h-full gap-2">
            <button onClick={onGoBackDoc} className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto absolute top-4 left-4">← رجوع</button>
            <div className="flex flex-1 border border-indigo-800 rounded-2xl mt-12 overflow-y-auto">

            </div>
            <div className="flex flex-row-reverse w-full gap-2">
                <input type="text" placeholder={currentStep.placeholder} onChange={letterFormHandler} value={letterForm[currentStep.id] || ""} className="bg-indigo-300 px-4 py-2 border border-indigo-600 rounded-md flex flex-1 text-lg text-indigo-950 text-right"/>
                <button onClick={nextStep} className="bg-indigo-600 px-4 py-2 rounded-2xl text-lg hover:bg-indigo-700 transition-colors cursor-pointer">إرسال</button>
            </div>
        </div>
    );
} 
export default Letter