import { Router } from "express";
import { UserController } from "../../controllers/UserController.ts";

const userController = new UserController();

export const router = Router();

router.get("/create", userController.store);