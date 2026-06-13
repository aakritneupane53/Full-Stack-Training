import "dotenv/config";
import http from "node:http";

import app from "./app";
import connectDb from "./config/db";

const PORT = Number.parseInt(process.env.PORT || 3001);
const server = http.createServer(app);

async function startServer() {
  try {
    await connectDb();

    server.listen(PORT, () => {
      console.log(
        `Server listening at http://${process.env.HOST}:${process.env.PORT}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

startServer();
