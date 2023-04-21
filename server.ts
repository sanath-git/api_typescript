import express,{ Express,Request,Response } from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db";
import todoRouter from "./routes/todo";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();

const app:Express = express();
app.use(bodyParser.json()); // Parse JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
const port:any = process.env.PORT;
const url  = process.env.MONGO_URI || "";
mongoose.connect(url).then(()=>console.log("connection successful"))
app.get("/",(req:Request,res:Response)=>{
    res.send({message:"Root route"});
})

app.use("/todos",todoRouter);
app.listen(port,()=>console.log("listening to port 8080"));