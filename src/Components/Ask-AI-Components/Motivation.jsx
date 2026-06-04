import {useState} from "react";

const MotSteps = [
    {id: "fullname", placeholder: "أدخل اسمك الكامل"},
    {id: "age", placeholder: "أدخل عمرك"},
    {id: "scholarship", placeholder: "أدخل اسم المنحة"},
    {id: "university", placeholder: "أدخل اسم الجامعة"},
    {id: "specialization", placeholder: "أدخل الاختصاص"},
    {id: "country", placeholder: "أدخل اسم البلد"}
];

function Motivation({onGoBackDoc}) {
    const [motStepIndex, SetMotStepIndex] = useState(0);
    const [motForm, SetMotForm] = useState({
        fullname: "",
        age: "",
        scholarship: "",
        university: "",
        specialization: "",
        country: ""
    });

    const currentStep = MotSteps[motStepIndex];

    function motFormHandler(e) {
        const value = e.target.value;
        SetMotForm(m => ({...m, [currentStep.id]: value}));
    }

    function nextStep() {
        const currentValue = motForm[currentStep.id];
        if(!currentValue || currentValue.trim() === ""){
            alert("أدخل المعلومات المطلوبة");
            return;
        }
        if(motStepIndex < MotSteps.length - 1)
            SetMotStepIndex(motStepIndex + 1);
        else {
            alert("انتهت عمليات الادخال");
        }
    }

    return(
        <div className="flex flex-col gap-2 w-full h-full">
            <button onClick={onGoBackDoc} className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto absolute top-4 left-4">← رجوع</button>
            <div className="flex flex-1 border border-indigo-800 rounded-2xl mt-12 overflow-y-auto">
                <p className="p-4 text-lg text-indigo-950 ">
                    {motForm.fullname}
                    {motForm.age}
                    {motForm.scholarship}
                    {motForm.specialization}
                    {motForm.university}
                    </p>
            </div>
            <div className="flex flex-row-reverse gap-2">
                <input type="text" placeholder={currentStep.placeholder} onChange={(e) => motFormHandler(e)} value={motForm[currentStep.id] || ""} className="flex flex-1 border border-indigo-400 rounded-md bg-indigo-200 text-lg text-indigo-950 px-4 py-2 text-right"/>
                <button onClick={nextStep} className="bg-indigo-600 px-4 py-2 rounded-2xl text-lg hover:bg-indigo-800 transition-colors">إرسال</button>
            </div>
        </div>
    );
}
export default Motivation