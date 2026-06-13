import express, { Request, Response, NextFunction } from "express";

import errorHandler from "./middleware/error.middleware";
import redis from "./config/redis";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.get("/health", (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Server is running just fine" });
});

app.get(
  "/redis/ping",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const redisRes = await redis.ping();
      if (!redisRes) {
        const err = new Error("Could not reach the redis server");
        err.statusCode = 500;
        throw err;
      }
      return res.status(200).json({ success: true, data: redisRes });
    } catch (error) {
      console.log("Error in pinging redis /redis/ping");
      next(error);
    }
  },
);

app.all(/.*/, (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Router, ${req.originalUrl} not found`);
  (err as any).statusCode = 404;
  throw err;
});
export default app;
