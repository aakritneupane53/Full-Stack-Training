import "dotenv/config";
import app from "./index";
import http from "node:http";

import connectDB from "./config/db";

const PORT = Number.parseInt(process.env.PORT as string) || 3001;

const server = http.createServer(app);

server.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`server conected at http://localhost:${3001}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
});
