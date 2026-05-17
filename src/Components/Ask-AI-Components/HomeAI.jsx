

function HomeAI({OnGoToDocuments, OnGoToChat}) {
   
    
    return(
        <div>
             <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col gap-6 justify-center items-center ">
                                            <p className="text-3xl font-bold text-indigo-800 pb-12">بماذا تريد المساعدة؟</p>
                                            <div className="flex flex-col gap-4">
                                                    <button onClick={OnGoToChat} className="bg-indigo-300 px-4 py-2 rounded-2xl text-lg font-bold text-indigo-950 hover:bg-indigo-400 shadow-2xl/50">محادثة مع الذكاء الاصطناعي</button>
                                                    <button onClick={OnGoToDocuments} className="bg-indigo-300 px-4 py-2 rounded-2xl text-lg font-bold text-indigo-950 hover:bg-indigo-400 shadow-2xl/50">مساعدة في الاوراق</button>
                                            </div>
                </div>
            
        </div>
    );
}

export default HomeAI;