const router = require("express").Router();
const Message = require("../models/Message");

//new conv
router.post("/",async (req,res)=>{
    const newMessage = new Message(req.body)
   
    try{
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);

    }catch(err){
       res.status(500).json(err);
    }
});

//get conv of a user
router.get("/:conversationId",async(res,req)=>{
    try{
        const messages = await Message.find({
            conversationId:req.params.conversationId,
        });
        res.status(200).json(messages);

    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = router;
