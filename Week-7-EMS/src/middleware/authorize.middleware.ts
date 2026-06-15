import "dotenv/config";
import { Request, Response, NextFunction } from "express";

import { AppError } from "../utils/AppError";
import { decodeToken } from "../utils/tokens";

export default function authorize(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      throw new AppError("No authorization header provided", 401);
    if (!authHeader.startsWith("Bearer"))
      throw new AppError("Invalid authorization header", 401);

    const accessToken = authHeader.split(" ")[1];
    if (!accessToken) throw new AppError("No access token provided", 401);

    const payload = decodeToken(
      accessToken,
      process.env.JWT_ACCESS_SECRET as string,
    );
    if (!payload) throw new AppError("Invalid access token provided", 401);

    req.user = payload;
    next();
  } catch (error) {
    console.log("error in authorize middleware", error.message);
    next(error);
  }
}
