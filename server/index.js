const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const router = require("./router");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(cors({
//   origin:['http://localhost:3000'],
//   methods:['GET','POST'],
//   credentials: true
// }));

app.use("/", router);

app.get("/test", async (req, res) => {
  res.json({ message: "pass!" });
});

module.exports = app;
