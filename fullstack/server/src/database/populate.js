const db = require("../../db.json");
const Book = require("../model/Book");
const BookRepository = require("../repository/BookRepository");
const repository = new BookRepository();
const logger = require("../utils/logger");

const treat = (item) => {
  item.users_who_liked = item.users_who_liked
    ? "{" + item.users_who_liked.toString() + "}"
    : "";
  for (let property in item) {
    item[property.toUpperCase()] = item[property];
    delete item[property];
  }
  return item;
};
const tableCount = async () => {
  let result = await repository.search(
    {},
    {
      custom: {
        query: "LIMIT 2",
        values: [],
      },
    }
  );
  return result.length;
};

const populate = async () => {
  const hasItems = (await tableCount()) > 0;
  if (hasItems) return;

  let promises = [];
  const treatedArray = db.map(treat);

  treatedArray.forEach((each) => {
    promises.push(repository.create(new Book(each, true)));
  });

  Promise.all(promises).then((values) => {
    logger.info("Database populated");
  });
};
module.exports = populate;
