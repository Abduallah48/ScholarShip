import {useState} from "react";

const CVSteps = [
    {id: "CVLang", placeholder: " أدخل اللغة المطلوب الكتابة بها"},
    {id: "fullName", placeholder: "أدخل اسمك الكامل"},
    {id: "contact", placeholder: "أدخل ايميلك او رقم هاتفك"},
    {id: "languges", placeholder: "أدخل اللغات التي تتقنها"},
    {id: "skills", placeholder: "أدخل مهاراتك"},
    {id: "age", placeholder: "أدخل عمرك"},
    {id: "specialization", placeholder: "أدخل اختصاصك"},
    {id: "selfDesc", placeholder: "أدخل هواياتك أو موضوع اضافي تريد ذكره"},
];

function CV({onGoBackDoc}) {
    
    const [CVStepIndex, SetCVStepIndex] = useState(0);
    const [CVForm, SetCVForm] = useState({
        CVLang: "",
        fullName: "",
        contact: "",
        languges: "",
        skills: "",
        age: "",
        specialization: "",
        selfDesc: "",
    });

    const currentStep = CVSteps[CVStepIndex];

    function nextStep() {
        const currentValue = CVForm[currentStep.id];
        if(!currentValue || currentValue.trim() === ""){
            alert("أدخل المعلومات المطلوبة");
            return;
        }
        if(CVStepIndex < CVSteps.length - 1){
            SetCVStepIndex(CVStepIndex + 1);

        }
        else {
            alert("انتهت عمليات الاضافة");
        }
    };

    function CVFormHandler(e) {
        const value = e.target.value;
        SetCVForm(c => ({...c, [currentStep.id]: value}))
    };
    

    return(
        <div className="flex flex-col  gap-2 w-full h-full pt-12">
            <button onClick={onGoBackDoc} className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto absolute top-4 left-4">← رجوع</button>
            <div className="flex flex-col  flex-1 border border-indigo-800  rounded-lg overflow-y-auto">
                <p className="text-lg text-indigo-950 p-2">{CVForm.CVLang}</p>
            </div>
            <div className="flex w-full mt-auto">
                <div className="flex flex-row-reverse  gap-4 w-full">
                    <input type="text" placeholder={currentStep.placeholder} onChange={(e) => CVFormHandler(e)} value={CVForm[currentStep.id || ""]} className="flex flex-1 border border-indigo-400 px-4 py-2 bg-indigo-200 text-indigo-950 text-lg rounded-md "/>
                    <button onClick={nextStep} className="bg-indigo-600 px-4 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors">إرسال</button>
                </div>
                
            </div>
        </div>
    );
}
export default CV