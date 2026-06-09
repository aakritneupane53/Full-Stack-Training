import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/auth.utils";

export default function authorize(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const autorizationHeader = req.headers.authorization;
    if (!autorizationHeader || !autorizationHeader.startsWith("Bearer"))
      return res.status(401).json({ message: "No authorization header" });
    const token = autorizationHeader?.split(" ")[1];
    if (!token)
      return res.status(401).json({ message: "No authorization token" });

    const payload = verifyToken(token);
    if (!payload) return res.status(401).json({ message: "Invalid token" });

    req.user = payload.user;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
