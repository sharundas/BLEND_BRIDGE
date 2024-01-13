import mongoose from "mongoose";

const CreateCommunity = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  
    description: {
      type: String,
      required: true
    },
 
    privacyPolicy:{
      type: Boolean,
      required: true
    },
 
    images: {
      type: Array,

    },
    type: {
      type: String,
      required:true
    },
   
  },
  { timestamps:true}
)

const Community = mongoose.model("Community", CreateCommunity);

export default Community;