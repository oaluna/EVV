const express = require("express");
const path = require("path");
const http = require("http");
const exegesisExpress = require("exegesis-express");

async function createServer() {
  // See https://github.com/exegesis-js/exegesis/blob/master/docs/Options.md
  const options = {
    controllers: path.resolve(__dirname, "./controllers"),
  };

  const exegesisMiddleware = await exegesisExpress.middleware(
    path.resolve(__dirname, "./openapi.yaml"),
    options
  );

  const app = express();

  // If you have any body parsers, this should go before them.
  app.use(exegesisMiddleware);

  app.use((req, res) => {
    res.status(404).json({ message: `Not found` });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({ message: `Internal error: ${err.message}` });
  });

  const server = http.createServer(app);
  server.listen(3000);
}