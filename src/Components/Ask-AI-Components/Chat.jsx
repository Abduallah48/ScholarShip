
function Chat({OnGoToHome}) {
    return(
        <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col gap-6 justify-center items-center">
            <button onClick={OnGoToHome} className="absolute top-4 left-4 bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto mb-6">← رجوع</button>
            <input type="text" placeholder="ماذا تريد ان تسأل؟" className="bg-indigo-100 border border-indigo-300 px-6 py-4 rounded-md"/>
        </div>
    );
}
export default Chat