import HomeAI from "./HomeAI.jsx";
import {useState} from "react";
import Documents from "./DocumentsAI.jsx";
import Chat from "./Chat.jsx";


function AskAI({askAIClick, SetAskAIClick}) {
    
     const [screenAI, SetScreenAI] = useState("Home");
     const goTODocuments = () => SetScreenAI("Documents");
     const goTOChat = () => SetScreenAI("Chat");
     const gotOHome = () => SetScreenAI("Home");

     
    
    return(
        <div className="bg-black/50 fixed inset-0 flex flex-col  gap-12 ">
            <button onClick={() =>SetAskAIClick(!askAIClick)} className="text-white cursor-pointer text-4xl ml-auto p-6
                                    md:p-8
                                    lg:p-12">
                                        ✕
            </button>
            {screenAI === "Home" && <HomeAI OnGoToDocuments={goTODocuments} OnGoToChat={goTOChat}  />}
             
            {screenAI === "Documents" && <Documents OnGoToHome={gotOHome}/>}
            {screenAI === "Chat" && <Chat OnGoToHome={gotOHome}/>}
        </div>
        
    );
}

export default AskAI