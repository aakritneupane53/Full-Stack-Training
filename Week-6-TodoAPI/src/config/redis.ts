import { Redis } from "ioredis";
import "dotenv/config";
import type { RedisOptions } from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST ?? "localhost",
  port: Number.parseInt(process.env.REDIS_PORT ?? "6379"),
} as RedisOptions);

redis.on("error", (err) => {
  console.log("Redis err:", err);
});
redis.on("connect", () => {
  console.log("Redis connected");
});

export default redis;
