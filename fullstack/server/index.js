const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./src/db");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.options("*", cors());

app.use("/api/book/list", (req, res) => {
  res.send(db.list());
});
app.listen(PORT, () => {
  console.info(`App started at ${PORT}`);
});
