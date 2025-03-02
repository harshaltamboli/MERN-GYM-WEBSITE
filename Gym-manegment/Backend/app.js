import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app= express();
const router = express.Router();

config({path:"./config.env"});

app .use (cors({
    origin:[process. env.FRONTEND_URL],
     methods:["POST"],
     credentials:true
}));

app . use(express.json());
app.use(express.urlencoded({extended:true }));

router.get("/",(req,res,next)=>{
    res.json({success:true,message:"Come to dubai"})
});

const PORT = process.env.PORT || 4000;

console.log("Loaded PORT:", process.env.PORT);
app.use(router);
app.listen(PORT,()=>{
    console.log(`server listening at port ${process.env.PORT}`);
    
});