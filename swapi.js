const express = require("express");
const serverless = require("serverless-http");
const swapiRoute = require('./routes/swapiRoute');
const app = express();


app.use(express.json());

app.use("/swapi", swapiRoute);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


module.exports.swapi = serverless(app);
