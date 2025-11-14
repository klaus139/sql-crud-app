import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./database/db";

const app = express();

const port = process.env.PORT;

app.use(express.json())

//uncomment this to connect to the database
//connectToDatabase();


app.get("/test", (req, res)=>{
    res.status(200).json({
        success:true,
        message:"APP is running healthy"
    })
})


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})