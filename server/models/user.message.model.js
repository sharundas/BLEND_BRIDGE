import mongoose from "mongoose";


const MessageSchema = new mongoose.Schema({
  username: String,
  message: String,
})

const message = mongoose.model('Message', MessageSchema);
export default message;

