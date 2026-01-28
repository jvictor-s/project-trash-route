import express from "express";
import {prisma} from "../../databases/orm/lib/prisma.ts"

const app = express();

app.get("/",async (req,res)=>{
    const Users = await prisma.user.findMany(); 
    res.status(200).json(Users);
})

app.listen(3000);