import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { AppError } from "../utils/AppError";

export default function validate<T extends z.ZodType>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success)
      throw new AppError(
        `Invalid Schema ${result.error.message}`,
        400,
        result.error.flatten(),
      );

    req.body = result.data;
    next();
  };
}
