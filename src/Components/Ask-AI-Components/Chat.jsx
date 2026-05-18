import {useState} from "react";

function Chat({OnGoToHome}) {
    const [chatInput, SetChatInput] = useState("");
    const [messageChat, SetMessageChat] =  useState([
        {sender: "ai", text: "مرحبا! كيف يمكنني مساعدتك؟"}
    ]);
    function chatHandler(e) {
        SetChatInput(e.target.value);
    };
    function sendMessageHandler() {
        if(chatInput.trim() === "") return;
        SetMessageChat(m => [...m,{sender: "user", text: chatInput}]);
        SetChatInput("");
    }
    return(
        <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-120 border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col max-h-120 overflow-y-auto  gap-6 justify-center items-center">
            <button onClick={OnGoToHome} className="  bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 mr-auto ">← رجوع</button>
            <div className=" flex flex-col gap-1 flex-1  border border-indigo-800 rounded-3xl w-full  overflow-y-auto p-4 bg-white/50">
                    {messageChat.map((msg, index) => (
                        <div key = {index} className={` max-w-[85%] rounded-2xl p-4 shadow-sm ${msg.sender === "user" 
                                                        ? "bg-indigo-600 text-white self-end rounded-tr-sm" 
                                                        : "bg-slate-300 text-slate-900 self-start rounded-tl-sm" } 
                                                    `}>
                                    <p className="break-words whitespace-pre-wrap text-lg leading leading-relaxed">
                                        {msg.text}
                                    </p>
                        </div> 
                    ))}

                    
            </div>
            <div className="flex flex-row-reverse gap-6 mt-auto w-full">
                <input type="text" value={chatInput} onChange={(e) => chatHandler(e)} placeholder="ماذا تريد ان تسأل؟" className="flex flex-1 bg-indigo-100 border border-indigo-300 px-6 py-4 rounded-md text-indigo-800 text-lg text-right"/>
                <button type="submit" onClick={() => sendMessageHandler()}  className="bg-indigo-600 px-4 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors">إرسال</button>
            </div>
            
        </div>
    );
}
export default Chat