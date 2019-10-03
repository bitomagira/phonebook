const { Pool, Client } = require("pg");

//database connectionstring

const connectionString =
  "postgresql://postgres:postgres@localhost:5432/phonebook";

//connecting to the database

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "phonebook",
  password: "postgres",
  port: 5432
});

client
  .connect()
  .then(() => console.log("database Connected successfuly"))
  .catch(e => console.log("database connection error"));

module.exports = client;
