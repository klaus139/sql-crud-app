import mongoose, { Schema } from "mongoose";



const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
    },
    address:{
        type:String
    },
    password:{
        type:String
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    token:{
        type:String
    }
    
},{timestamps:true})


const User = mongoose.model("User", userSchema);

export default User;