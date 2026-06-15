import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export default function RoleAuthorize(role: "user" | "admin") {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user)
        throw new AppError("unauthorized access, no authorized user", 401);
      if (role !== req.user.role)
        throw new AppError("Forbidden access, invalid role", 403);
      next();
    } catch (error) {
      console.log(`error in handling role based auth middleware`, error);
      next(error);
    }
  };
}
