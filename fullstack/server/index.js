const routers = require("./src/router/index");
const database  = require("./src/database/index");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const logger = require("./src/utils/logger");


dotenv.config();

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

database();

app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", routers);
app.listen(PORT, () => {
  logger.info(`App started at ${PORT}`);
});


app.use(express.static(__dirname + '/public'));