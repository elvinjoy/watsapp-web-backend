import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array,
    },
    message: {
        type: String,
    }},
    {
    timestamp: true,
    }
);

const conversation = mongoose.model("Conversation", conversationSchema)
    
export default conversation;