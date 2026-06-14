import express, { Request, Response, NextFunction } from "express";

import { loginSchema } from "../schema/auth.schema";
import { userSchema } from "../../user/schema/user.schema";
import validate from "../../middleware/validate.middleware";
import { registerHandler } from "../controller/auth.controller";

const router = express.Router();

router.post("/register", validate(userSchema), registerHandler);

export default router;
