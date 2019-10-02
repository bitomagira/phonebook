const { Pool, Client } = require("pg");
const connectionString =
  "postgresql://postgres:postgres@localhost:5432/phonebook";

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "phonebook",
  password: "postgres",
  port: 5432
});

client.connect();

module.exports = client;
