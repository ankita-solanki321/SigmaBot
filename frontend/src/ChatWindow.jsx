// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// function ChatWindow(){
//     return(
//        <div className="chatWindow">
//            <div className="navbar">
//            <span>SigmaBot <i class="fa-solid fa-angle-down"></i></span>
//            <div className="userIconDiv">
//            <span><i class="fa-solid fa-user"></i></span> 
//            </div>
//            </div>
//            <Chat></Chat>
//            <div className="chatInput">
//             <div className="userInput">
//                 <input placeholder="Ask anyting">

//                 </input>
//                 <div id ="submit"><i class="fa-solid fa-paper-plane"></i></div>
//                 <p className="info">
//                 SigmaBot can make mistakes. Check important info
//                 </p>
//             </div>
//            </div>
//         </div>
//     )
// }
// export default ChatWindow;


import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow() {
    return (
        <div className="chatWindow">
            <div className="navbar">
                <span>SigmaBot <i className="fa-solid fa-angle-down"></i></span>
                <div className="userIconDiv">
                    <span><i className="fa-solid fa-user"></i></span>
                </div>
            </div>

            <Chat />

            <div className="chatInput">
                <div className="userInput">
                    <input placeholder="Ask anything" />
                    <div id="submit">
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                </div>
                <p className="info">
                    SigmaBot can make mistakes. Check important info
                </p>
            </div>
        </div>
    );
}

export default ChatWindow;