import express from "express";
import { router } from "./routes/routesUser.ts";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(router)

// app.get("/",(req,res) =>{
//     res.send("Servidor rodando!")
// })

app.listen(process.env.PORT);