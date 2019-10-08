"use strict";
const database = require("../database");
const SQL = require("pg-template-tag").default;

// database query to create the persons table
const createTable = async () => {
  await database.query(`
    CREATE TABLE IF NOT EXISTS persons
    (
        id SERIAL PRIMARY KEY NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        telephone VARCHAR(30) UNIQUE NOT NULL
    );`);
};

const populateDB = async () => {
  await searchAll().then(async data => {
    if (data.rows.length === 0) {
      const data = [
        {
          first_name: "steve",
          last_name: "bitomagira",
          telephone: "+11 11 111111"
        },
        {
          first_name: "jiji",
          last_name: "mutesi",
          telephone: "+22 22 222222"
        },
        {
          first_name: "nadege",
          last_name: "izere",
          telephone: "+33 33 333333"
        },
        {
          first_name: "alida",
          last_name: "uwizeye",
          telephone: "+44 12 123456"
        }
      ];

      await data.map(entry => {
        insert(entry);
      });
    } else {
      return null;
    }
  });
};

// database query to insert an entry in the persons table
const insert = async data => {
  return await database.query(
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
const searchAll = async () => {
  return await database.query(
    SQL`
    SELECT * FROM persons 
    `
  );
};

// database query to search by name or by phone number
const search = async data => {
  let val = "%".concat(data, "%");
  return await database.query(
    SQL`
    SELECT * FROM persons WHERE first_name LIKE ${val}  OR last_name LIKE ${val}OR telephone LIKE ${val}
    `
  );
};

// database query to update a specific entry

const update = async (id, data) => {
  return await database.query(
    SQL`
    UPDATE persons 
    SET first_name = ${data.first_name},
    last_name=${data.last_name},
    telephone=${data.telephone}
    WHERE telephone=${id}`
  );
};

module.exports = {
  createTable,
  insert,
  searchAll,
  search,
  update,
  populateDB
};
