const fs = require("fs");
var sql = fs.readFileSync("./create.sql").toString();
const populate = require("./populate");
const Database = require("@schirrel/pg-connection/Database");

const logger = require("../utils/logger");

module.exports = () => {
  Database.query(sql)
    .then((res) => {
      logger.info(res);
      populate();
    })
    .catch((err) => {
      logger.error(err);
    });
};
