"use strict";
const database = require("../database");
const SQL = require("pg-template-tag").default;
const createTable = () => {
  database.query(`
    CREATE TABLE IF NOT EXISTS persons
    (
        id SERIAL PRIMARY KEY NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        telephone VARCHAR(30) UNIQUE NOT NULL
    );`);
};
const insert = data => {
  return database.query(
    SQL`
    INSERT INTO persons(
        first_name,
        last_name,
        telephone
    )values(
        ${data.first_name},
        ${data.last_name},
        ${data.telephone}
    )
    `
  );
};
module.exports = {
  createTable,
  insert
};
