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


// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { useContext } from "react";

// function ChatWindow() {
//    const {prompt, setPrompt, reply, setReply, currThreadId,setCurrentThreadId} = useContext(MyContext);

//    const getReply = async () =>{
//     const options = {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify({
//             message :prompt,
//             threadId : currThreadId

//         })
//     };
//     try{
//      const response =await fetch("http://localhost:8080/api/chat", options);
//      const res = await response.json();
//      console.log(res);
//     }catch(err){
//         console.log(err);
//     }
//    }
   
//     return (
//         <div className="chatWindow">
//             <div className="navbar">
//                 <span>SigmaBot <i className="fa-solid fa-angle-down"></i></span>
//                 <div className="userIconDiv">
//                     <span><i className="fa-solid fa-user"></i></span>
//                 </div>
//             </div>

//             <Chat />

//             <div className="chatInput">
//                 <div className="userInput">
//                     <input placeholder="Ask anything" value={prompt} onChange={(e) =>setPrompt(e.target.value)}/>
//                     <div id="submit" onClick={getReply}>
//                         <i className="fa-solid fa-paper-plane"></i>
//                     </div>
//                 </div>
//                 <p className="info">
//                     SigmaBot can make mistakes. Check important info
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ChatWindow;


// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { useContext, useState } from "react";
// import {ScaleLoader} from "react-spinners";


// function ChatWindow() {
//    const { prompt, setPrompt, reply, setReply, currThreadId, setCurrentThreadId } = useContext(MyContext);
//    const {loading, setLoading} = useContext(false);



//    const getReply = async () => {
//     setLoading(true);
//         if (!prompt.trim()) return;

//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };

//         try {
//             const response = await fetch("http://localhost:8080/api/chat", options);
//             const res = await response.json();
//             console.log("reply:", res.reply);
//             setReply(res.reply);
//             setPrompt("");
//         } catch (err) {
//             console.log(err);
//         }finally {
//         setLoading(false); 
//     }
//    };

//    const handleKeyDown = (e) => {
//         if (e.key === "Enter") getReply();
//    };

//     return (
//         <div className="chatWindow">
//             <div className="navbar">
//                 <span>SigmaBot <i className="fa-solid fa-angle-down"></i></span>
//                 <div className="userIconDiv">
//                     <span><i className="fa-solid fa-user"></i></span>
//                 </div>
//             </div>

//             <Chat />
//             <ScaleLoader color="#fff" loading ={loading}>


//             </ScaleLoader>

//             <div className="chatInput">
//                 <div className="userInput">
//                     <input
//                         placeholder="Ask anything"
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={handleKeyDown}
//                     />
//                     <div id="submit" onClick={getReply}>
//                         <i className="fa-solid fa-paper-plane"></i>
//                     </div>
//                 </div>
//                 <p className="info">
//                     SigmaBot can make mistakes. Check important info
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ChatWindow;



// import "./ChatWindow.css";
// import Chat from "./Chat.jsx";
// import { MyContext } from "./MyContext.jsx";
// import { useContext, useState, useEffect } from "react";
// import { ScaleLoader } from "react-spinners";

// function ChatWindow() {
//    const { prompt, setPrompt, reply, setReply, currThreadId, setCurrentThreadId,prevChats, setPrevChats } = useContext(MyContext);
//    const [loading, setLoading] = useState(false); 

//    const getReply = async () => {
//         if (!prompt.trim()) return;
//         setLoading(true);
//         // setPrompt("");

//         const options = {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 message: prompt,
//                 threadId: currThreadId
//             })
//         };

//         try {
//             const response = await fetch("http://localhost:8080/api/chat", options);
//             const res = await response.json();
//             console.log("reply:", res.reply);
//             setReply(res.reply);
//             // setPrompt("");
//         } catch (err) {
//             console.log(err);
//         } finally {
//             setLoading(false);
//         }
//    };

   
//    //append new chat to previous chat
//    useEffect(() => {
//       if(prompt && reply){
//         setPrevChats(prevChats => 
//             [...prevChats,{
//                 role: "user",
//                 content: prompt
//             },{
//                 role:"assistant",
//                 content: reply
//             }]
//         )
//       }
//       setPrompt("");
//    }, [reply]);

//    const handleKeyDown = (e) => {
//         if (e.key === "Enter") getReply();
//    };

//     return (
//         <div className="chatWindow">
//             <div className="navbar">
//                 <span>SigmaBot <i className="fa-solid fa-angle-down"></i></span>
//                 <div className="userIconDiv">
//                     <span><i className="fa-solid fa-user"></i></span>
//                 </div>
//             </div>

//             <Chat />
//             <ScaleLoader color="#fff" loading={loading} />

//             <div className="chatInput">
//                 <div className="userInput">
//                     <input
//                         placeholder="Ask anything"
//                         value={prompt}
//                         onChange={(e) => setPrompt(e.target.value)}
//                         onKeyDown={handleKeyDown}
//                     />
//                     <div id="submit" onClick={getReply}>
//                         <i className="fa-solid fa-paper-plane"></i>
//                     </div>
//                 </div>
//                 <p className="info">
//                     SigmaBot can make mistakes. Check important info
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ChatWindow;


import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

function ChatWindow() {
  const {
    prompt, setPrompt,
    reply, setReply,
    currThreadId,
    prevChats, setPrevChats,
    setNewChat, getAllThreads  
  } = useContext(MyContext);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); //drop down for user profile


  const getReply = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setNewChat(false); 

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt, threadId: currThreadId })
    };

    try {
      const response = await fetch("http://localhost:8080/api/chat", options);
      const res = await response.json();
      setReply(res.reply);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ reply aane ke baad prevChats update karo aur sidebar refresh karo
  useEffect(() => {
    if (prompt && reply) {
      setPrevChats(prev => [
        ...prev,
        { role: "user", content: prompt },
        { role: "assistant", content: reply }
      ]);
      getAllThreads(); // ✅ naya thread sidebar mein aayega
    }
    setPrompt("");
  }, [reply]);


  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") getReply();
  };

  return (
    <div className="chatWindow">
      <div className="navbar">
        <span>SigmaBot <i className="fa-solid fa-angle-down"></i></span>
        <div className="userIconDiv" onClick={handleProfileClick}>
          <span><i className="fa-solid fa-user"></i></span>
        </div>
      </div>

      {
        isOpen && 
        <div className="dropDown">
          <div className="dropDownItem"><i class="fa-solid fa-cloud-arrow-up"></i>Upgrade plan</div>
          <div className="dropDownItem"><i class="fa-solid fa-gear"></i>Settings</div>
          <div className="dropDownItem"><i class="fa-solid fa-arrow-right-from-bracket"></i>Log out</div>
        </div>
      }

      <Chat />
      <ScaleLoader color="#fff" loading={loading} />

      <div className="chatInput">
        <div className="userInput">
          <input
            placeholder="Ask anything"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div id="submit" onClick={getReply}>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
        <p className="info">SigmaBot can make mistakes. Check important info</p>
      </div>
    </div>
  );
}

export default ChatWindow;