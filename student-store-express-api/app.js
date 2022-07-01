const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const studstoreRoute = require("./routes/studstore");
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/store", studstoreRoute);

app.get("/", (req, res, next) => {
  res.status(200).json({ ping: "pong" });
  console.log(req);
});

// app.get("/store",  (req, res, next) => {
//     res.send({ "products": "id", : "name",  :"category", :"image"});
//     console.log(req);
//   });

module.exports = app;
