const persons = require("./model");
const database = require("../database");
const SQL = require("pg-template-tag").default;
var Regex = require("regex");

const controller = {};
// create the table persons in the database

persons.createTable();
persons.populateDB();

// verify if the phone number is in the good format

phoneverification = phone => {
  const regex = /^\+\d{2}\s\d{2}\s\d{6,}$/;
  return regex.test(phone);
};

// recieve a request to create a new entry in the phonebook

controller.createPerson = (req, res) => {
  const data = req.body;
  if (
    data.first_name.length > 0 &&
    data.last_name.length > 0 &&
    phoneverification(data.telephone)
  ) {
    persons
      .insert(data)
      .then(result => res.send(data))
      .catch(e => res.status(400).send({ error: e.detail }));
  } else {
    res.status(400).send({ error: "data format error" });
  }
};

// List all the entries

controller.searchAll = (req, res) => {
  persons.searchAll().then(result => res.send(result.rows));
};

// recieve a request to search for all the entries
// with a specific first_name,last_name or phonenumber

controller.search = (req, res) => {
  const data = req.body;
  persons.search(data.input).then(result => res.send(result.rows));
};

// update a specific entry

controller.update = (req, res) => {
  const id = req.body.id;
  const data = req.body;
  persons
    .update(id, data)
    .then(result => res.send(data))
    .catch(error => res.send({ error: error.detail }));
};
module.exports = controller;
