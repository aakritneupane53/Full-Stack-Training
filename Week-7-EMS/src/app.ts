import express, { Request, Response, NextFunction } from "express";

import errorHandler from "./middleware/error.middleware";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.get("/health", (req, res, next) => {
  return res.status(200).json({ message: "Server is running just fine" });
});

app.all(/.*/, (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Router, ${req.originalUrl} not found`);
  (err as any).statusCode = 404;
  throw err;
});
export default app;
