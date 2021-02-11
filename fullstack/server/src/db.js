const db = require("../../db.json");

class Database {
  constructor() {
    this.db = db;
    if (!Database.instance) {
      Database.instance = this;
    }
    // Initialize object
    return Database.instance;
  }

  list() {
    return db;
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;
