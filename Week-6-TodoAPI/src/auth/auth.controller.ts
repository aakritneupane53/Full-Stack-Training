import type { Request, Response } from "express";

import { createUser, getUserByEmail } from "./services/auth.services";
import { createToken } from "../utils/auth.utils";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);
    if (!user)
      return res.status(401).json({ message: "Invalid email of password" });
    const token = createToken(user._id.toString());
    return res.status(200).json({ data: user, token });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (user)
      return res
        .status(400)
        .json({ message: "User with this email already exists" });

    const newUser = await createUser({ email, password });
    if (!newUser)
      return res.status(500).json({ message: "Failiure writing to the db" });

    return res.status(201).json({ data: newUser });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
