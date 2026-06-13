import "dotenv/config";
import http from "node:http";

import app from "./app";

const PORT = Number.parseInt(process.env.PORT || 3001);
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server listening at http://${process.env.HOST}:${process.env.PORT}`,
  );
});
