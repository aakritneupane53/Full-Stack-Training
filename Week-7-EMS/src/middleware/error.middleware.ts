import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status((error as any)?.statusCode || 500).json({
    success: false,
    message: "Internal Server error, something went wrong",
    errors: error.message,
  });
}
