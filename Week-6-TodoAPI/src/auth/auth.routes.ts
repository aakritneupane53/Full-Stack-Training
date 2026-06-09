import express from "express";
import type { Request, Response } from "express";

import validate from "../middleware/validation.middleware";
import { registerSchema } from "./schema/register.schema";
import { loginSchema } from "./schema/login.schema";

import { register, login } from "./auth.controller";

const router = express.Router();

router.post("/auth/register", validate(registerSchema), register);
router.post("/auth/login", validate(loginSchema), login);

export default router;
