import { options } from "less";
import React from "react";

export const filterByCategory = (items, category) => {
  let results = items;
  if (category) {
    results = items.filter((item) =>
      item.category.toLowerCase().startsWith(category.toLowerCase())
    );
  }

  console.log(results);
  return results;
};
export const filterByInputSearch = (items, search) => {
  let results = items;
  if (search) {
    results = items.filter(
      (item) =>
        item.category.toLowerCase().startsWith(search.toLowerCase()) ||
        item.name.toLowerCase().startsWith(search.toLowerCase()) ||
        item.author.toLowerCase().startsWith(search.toLowerCase()) ||
        item.author.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  console.log(results);
  return results;
};

/* export const filterByIsLiked= (items) => {
    return items.filter((item) => item.category === category);
  }; */

export const filterByAlphabeticalOrder = (items) => {
  return items.sort((a, b) => {
    let filterA = a.name.toLowerCase();
    let filterB = b.name.toLowerCase();
    return filterA !== filterB.toLowerCase() ? (filterA < filterB ? -1 : 1) : 0;
  });
};

export const sortByLikes = (items) =>
  items.sort(
    (a, b) =>
      a.users_who_liked.length !== b.users_who_liked.length
        ? a.users_who_liked.length > b.users_who_liked.length
          ? -1 //sort string ascending
          : 1
        : 0 //default return value (no sorting)
  );

export const sortByStock = (items) =>
  items.sort(
    (a, b) =>
      a.stock !== b.stock
        ? a.stock > b.stock
          ? -1 //sort string ascending
          : 1
        : 0 //default return value (no sorting)
  );
