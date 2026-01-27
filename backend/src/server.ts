import express from "express";
import {prisma} from "../../databases/orm/lib/prisma.ts"

const app = express();

app.get("/",async (req,res)=>{
    const pessoas = await prisma.pessoa.findMany(); 
    res.status(200).json(pessoas);
})

app.listen(3000);