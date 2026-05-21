import express from "express";
import Thread from "../models/Thread.js";
const router = express.Router();

// test
router.post("/test" , async(req , res) =>{
    try{
        const thread  = new Thread({
            threadId: "abc",
            title: "testing new thread2"
        });
        const response = await thread.save();
        res.send(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to save in DB"});

    }
});


//GET ALL THREADS
router.get("/thread" , async(req, res) =>{
   try{
     const threads = await Thread.find({}).sort({updatedAt: -1});  //sort in descending order od timestamp and show all the thread  or  basically chat history
     res.json(threads);
   }catch(err){
    console.log(err);
    res.status(500).json({error: "Failed to fetch the status"});
   }
});

// get specific thread and there msgs
router.get("/thread/:threadId" , async(req,res) => {
    try{
     const thread = await  Thread.findOne({threadId});
     if(!thread){
        res.status(404).json({error: "Thread not found"});
     }
      res.json(thread.messages);
    }catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to fetch the chats"});
    }
});

//delete route
router.delete("/thread/:threadId" , async(req,res) =>{
  try{
       const deletedThread = await Thread.findOneAndDelete({threadId});
       if(!deletedThread ){
        res.status(404).json({error: "Thread not found"});
       }
       res.status(200).json({success: "Thread deleted Succesfully"});
  }catch(err){
        console.log(err);
        res.status(500).json({error: "Failed to delete the threads"});
    }
});
export default router;