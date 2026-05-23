import "./Sidebar.css";

function Sidebar(){
    return(
        <section className="sidebar">
         {/* new chat button */}
           <button>
            <img src="src/assets/blacklogo.png"  className="logo" lt="gpt logo"></img>
            <span><i className="fa-solid fa-pen-to-square"></i></span>
           </button>
         {/* chat history */}
         <ul className="history">
            <li>thread1</li>
             <li>thread2</li>
         </ul>
         {/* sign */}
         <div className="sign">
            <p>By Ankita &hearts;</p>
         </div>
        </section>
    )
}
export default Sidebar;