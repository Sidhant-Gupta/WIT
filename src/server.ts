import * as http from "http";

import app from "./app";

const { PORT = 7500 } = process.env;

process.on('uncaughtException', (err) => {
  console.log('an uncaught exception detected', err);
  process.exit(-1);
});

process.on('unhandledRejection', (err) => {
  console.log('an unhandled rejection detected', err);
  process.exit(-1);
});

async function startServer() {
  try {
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server is running http://localhost:${PORT}...`);
    });
  } catch (err) {
    console.log("start server: ", err);
    return;
  }
}

startServer();

