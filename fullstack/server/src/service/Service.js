const Logger = require("../utils/logger");

class Service {
  constructor(repository, table) {
    if (!repository || !table) {
      throw new Error("Repository and Model are both required");
    }
    this.repository = new repository();
    this.table = table;
    this.logger = Logger;
  }
  async get(id) {
    return await this.repository.get(id);
  }
  async create(model) {
    let result = await this.repository.create(model);
    if (result.erro) {
      let err = result;
      if (err.constraint) {
        if (err.routine.toLowerCase().indexOf("unique") != 1) {
          let columnName = err.constraint.substring(
            err.constraint.indexOf("_")
          );
          throw {
            erro: true,
            message: "Violação de constraint única: " + columnName,
          };
        }
      }
    } else return result.rows[0];
  }
  async update(model) {
    let result = await this.repository.update(model);
    if (result.erro) throw new Error(result);
    else return result.rows[0];
  }

  async delete(id) {
    return await this.repository.delete(id);
  }
  async list() {
    let result = await this.repository.list();
    result = result.map((item) => new this.table(item, true));
    return result;
  }

  async search(options) {
    let result = await this.repository.search(options);
    return result;
  }
  async paginate(options) {
    //TODO
  }
}

module.exports = Service;
