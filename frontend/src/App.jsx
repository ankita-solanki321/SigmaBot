
import './App.css'
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import {MyContext} from "./MyContext.jsx";
import { useState} from 'react';
import {v1 as uuidv1} from "uuid";


function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrentThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]); // store all chats of current thread
  const [newChat, setNewChat] = useState(true);// keep track of new chat when it is created
  const [allThreads, setAllThreads] = useState([]);



   const getAllThreads = async () => {
    try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/thread`);
      const res = await response.json();
      const filteredData = res.map(thread => ({
        threadId: thread.threadId,
        title: thread.title
      }));
      setAllThreads(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const providerValues = {
    prompt , setPrompt,
    reply, setReply,
    currThreadId, setCurrentThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
     allThreads, setAllThreads,
      getAllThreads 
  };


  return (
    <div className='app'>
      <MyContext.Provider value={providerValues}>
    <Sidebar></Sidebar>
    <ChatWindow></ChatWindow>
    </MyContext.Provider>
    </div>
  )
}

export default App;
