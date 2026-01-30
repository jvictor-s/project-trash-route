import { Router } from "express";
import { UserController } from "../../controllers/UserController.ts";

const userController = new UserController();

export const router = Router();

router.get("/users", userController.listUsers);
router.post("/create", userController.createUser);
