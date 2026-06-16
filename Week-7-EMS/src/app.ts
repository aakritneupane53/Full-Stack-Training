import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";

import redis from "./config/redis";
import errorHandler from "./middleware/error.middleware";
import authRoutes from "./auth/routes/auth.routes";
import adminRoutes from "./admin/routes/admin.routes";
import eventRoutes from "./events/routes/event.routes";
import { AppError } from "./utils/AppError";
import authorize from "./middleware/authorize.middleware";
import RoleAuthorize from "./middleware/roleaccess.middleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/admin", authorize, RoleAuthorize("admin"), adminRoutes);
app.use("/api/events", authorize, eventRoutes);

app.get("/health", (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Server is running just fine" });
});

app.get(
  "/redis/ping",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const redisRes = await redis.ping();
      if (!redisRes)
        throw new AppError("Could not reach the redis server", 500);
      return res.status(200).json({ success: true, data: redisRes });
    } catch (error) {
      console.log("Error in pinging redis /redis/ping", error);
      next(error);
      process.exit(1);
    }
  },
);

app.all(/.*/, (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Router, ${req.originalUrl} not found`, 404));
});

app.use(errorHandler);
export default app;
