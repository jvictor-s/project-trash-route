import type { Request,Response } from "express";
import { prisma } from "../../databases/orm/lib/prisma.ts"
import { hash } from "bcryptjs";

export class UserController{

    async listUsers(req:Request, res:Response){
        const users = await prisma.user.findMany();
        return res.status(200).json({ users });
    }

    async createUser(req:Request, res:Response){
        const {name,email,password} = req.body;
        const hashPassword = await hash(password, 8);
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password:hashPassword,
            },
        });

        return res.status(201).json({user});
    }
}