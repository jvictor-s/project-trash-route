import type { Request,Response } from "express";
import { prisma } from "../../databases/orm/lib/prisma.ts"

export class UserController{
    async store(req:Request, res:Response){
        const {name,email,password} = req.body;
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password,
            },
        });

        return res.json({user});
    }
}