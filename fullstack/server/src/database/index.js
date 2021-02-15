const fs = require('fs');
var sql = fs.readFileSync('./create.sql').toString();
const Database = require("@schirrel/pg-connection/Database");

module.exports = () => {
  Database.query(sql);
};
