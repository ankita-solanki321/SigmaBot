import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext";
import {v1 as uuidv1} from "uuid";

function Sidebar(){
   const {allThreads, setAllThreads, currThreadId, setNewChat, setPrompt, setReply, setCurrentThreadId, setPrevChats} = useContext(MyContext);

   const getAllThreads = async () => {
      try{
        const response = await fetch("http://localhost:8080/api/thread");
        const res = await response.json();
        const filteredData = res.map(thread => ({threadId: thread.threadId, title:thread.title}));
        console.log(filteredData);
        setAllThreads(filteredData);
      }catch(err){
        console.log(err);
      }
   };
   useEffect(() =>{
      getAllThreads();
   }, [])


   const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrentThreadId(uuidv1());
    setPrevChats([]);
   
   }
    return(
        <section className="sidebar">
         {/* new chat button */}
           <button onClick={createNewChat}>
            <img src="src/assets/blacklogo.png"  className="logo" lt="gpt logo"></img>
            <span><i className="fa-solid fa-pen-to-square"></i></span>
           </button>



         {/* chat history */}
         <ul className="history">
            {
               allThreads?.map((thread, idx) => (
               <li key={idx}>{thread.title}</li>
               ))
            }
         </ul>


         {/* sign */}
         <div className="sign">
            <p>By Ankita &hearts;</p>
         </div>
        </section>
    )
}
export default Sidebar;