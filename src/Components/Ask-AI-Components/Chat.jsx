import { useState, useRef, useEffect } from "react";
import { useTokenStore } from "../../Store/token-store.js";

function Chat({ OnGoToHome }) {
    const token = useTokenStore((state) => state.token);
    const [chatInput, setChatInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [messageChat, setMessageChat] = useState([
        { sender: "ai", text: "مرحباً! كيف يمكنني مساعدتك في المنح الدراسية؟" }
    ]);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messageChat]);
    function chatHandler(e) {
        setChatInput(e.target.value);
    }
    async function sendMessageHandler() {
        if (chatInput.trim() === "") return;
        const userMessage = chatInput.trim();
        setMessageChat(prev => [...prev, { sender: "user", text: userMessage }]);
        setChatInput("");
        setIsLoading(true);
        try {
            const response = await fetch("http://127.0.0.1:8000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ message: userMessage }),
            });
            if (response.ok) {
                const data = await response.json();
                if (data.status === "success" && data.data?.reply) {
                    setMessageChat(prev => [...prev, { 
                        sender: "ai", 
                        text: data.data.reply 
                    }]);
                } else {
                    throw new Error("تنسيق رد غير متوقع من الخادم");
                }
            } else {
                let errorMessage = "حدث خطأ في الخادم";
                try {
                    const errorData = await response.json();
                    if (errorData.message) {
                        errorMessage = errorData.message;
                    }
                } catch (error) {
                    console.error("فشل تحليل استجابة الخطأ:", error);
                }
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessageChat(prev => [...prev, { 
                sender: "ai", 
                text: `❌ عذراً، حدث خطأ: ${error.message || "فشل الاتصال بالخادم"}\nيرجى المحاولة مرة أخرى.` 
            }]);
        } finally {
            setIsLoading(false);
        }
    }

    // ✅ معالجة ضغط Enter
    function handleKeyPress(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessageHandler();
        }
    }

    return (
        <div className="relative bg-slate-200 rounded-2xl p-4 w-full max-w-2xl h-[500px] border-slate-300 border-2 shadow-xl shadow-indigo-300 mx-auto flex flex-col">
            {/* رأس الشات */}
            <div className="flex items-center justify-between mb-2">
                <button 
                    onClick={OnGoToHome} 
                    className="bg-indigo-800 text-indigo-100 rounded-2xl p-2 cursor-pointer hover:bg-indigo-700 shadow-2xl/30 transition-colors"
                >
                    ← رجوع
                </button>
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-green-400 animate-pulse' : 'bg-green-600'}`}></div>
                    <span className="text-sm text-indigo-800 font-medium">AI مساعد</span>
                </div>
            </div>

            {/* منطقة الرسائل */}
            <div className="flex flex-col gap-2 flex-1 border border-indigo-800 rounded-3xl w-full overflow-y-auto p-4 bg-white/50 min-h-0">
                {messageChat.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                            msg.sender === "user" 
                                ? "bg-indigo-600 text-white self-end rounded-tr-sm" 
                                : "bg-slate-300 text-slate-900 self-start rounded-tl-sm"
                        }`}
                    >
                        <p className="break-words whitespace-pre-wrap text-lg leading-relaxed">
                            {msg.text}
                        </p>
                    </div>
                ))}
                
                {/* ✅ مؤشر التحميل */}
                {isLoading && (
                    <div className="self-start max-w-[85%] rounded-2xl p-4 bg-slate-300 text-slate-900 rounded-tl-sm">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                            <span className="text-sm">جاري التفكير...</span>
                        </div>
                    </div>
                )}
                
                {/* عنصر للتمرير التلقائي */}
                <div ref={messagesEndRef} />
            </div>

            {/* منطقة الإدخال */}
            <div className="flex flex-row-reverse gap-3 mt-3">
                <input 
                    type="text" 
                    value={chatInput} 
                    onChange={chatHandler} 
                    onKeyPress={handleKeyPress}
                    placeholder="ماذا تريد أن تسأل عن المنح الدراسية؟" 
                    className="flex-1 bg-indigo-100 border border-indigo-300 px-6 py-4 rounded-md text-indigo-800 text-lg text-right focus:outline-none focus:ring-2 focus:ring-indigo-600 disabled:opacity-50"
                    disabled={isLoading}
                />
                <button 
                    type="submit" 
                    onClick={sendMessageHandler} 
                    disabled={isLoading || !chatInput.trim()}
                    className="bg-indigo-600 px-6 py-2 rounded-2xl text-indigo-50 font-bold text-lg cursor-pointer hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[100px]"
                >
                    {isLoading ? "جاري..." : "إرسال"}
                </button>
            </div>
            
            {/* ✅ إضافة تلميح للمستخدم */}
            <div className="text-xs text-indigo-400 mt-2 text-center">
                اضغط Enter للإرسال
            </div>
        </div>
    );
}

export default Chat;