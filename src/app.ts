import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDatabase from "./database/db";
import authRoutes from "./routes/auth.route";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//uncomment this to connect to the database
connectToDatabase();

app.use("/api/auth", authRoutes);

app.get("/test", (req, res)=>{
    res.status(200).json({
        success:true,
        message:"APP is running healthy"
    })
})


app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})