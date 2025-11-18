import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    publishedYear:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Book = mongoose.model("Book", bookSchema);

export default Book;