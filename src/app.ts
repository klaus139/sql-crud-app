import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";


const app = express();

const port = 5005;

app.get("/test", (req, res)=>{
    return {
        success:true,
        message:"app is running well"
    }
})


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})