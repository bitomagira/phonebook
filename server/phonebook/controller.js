const persons = require("./model");
const database = require("../database");
const SQL = require("pg-template-tag").default;
var Regex = require("regex");
const controller = {};
persons.createTable();

phoneverification = phone => {
  const regex = /^\+\d{2}\s\d{2}\s\d{6,}$/;
  return regex.test(phone);
};

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
    res.status(400).send("data format error");
  }
};

module.exports = controller;
