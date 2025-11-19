import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

connectDB();

// Route
app.get("/api/v1/test", (req, res)=>{
    return {
        success:true,
        message:"app is running well"
    };
});


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
});

export default app;