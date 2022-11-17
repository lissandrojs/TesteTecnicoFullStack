import { Router } from "express";
import { infoUserController } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.get('',infoUserController);

export default usersRouter;