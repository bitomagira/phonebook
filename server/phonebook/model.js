"use strict";
const database = require("../database");
const SQL = require("pg-template-tag").default;

// database query to create the persons table
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

// database query to insert an entry in the persons table
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
// database query to list all the entries
const searchAll = () => {
  return database.query(
    SQL`
    SELECT * FROM persons 
    `
  );
};

// database query to search by name or by phone number
const search = data => {
  return database.query(
    SQL`
    SELECT * FROM persons WHERE first_name=${data} OR last_name=${data} OR telephone=${data}
    `
  );
};

// database query to update a specific entry

const update = (id, data) => {
  return database.query(
    SQL`
    UPDATE persons 
    SET first_name = ${data.first_name},
    last_name=${data.last_name},
    telephone=${data.telephone}
    WHERE id=${id}`
  );
};

module.exports = {
  createTable,
  insert,
  searchAll,
  search,
  update
};
