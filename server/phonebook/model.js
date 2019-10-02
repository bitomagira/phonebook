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
        telephone VARCHAR(14) UNIQUE NOT NULL
    );`);
};
module.exports = {
  createTable
};
