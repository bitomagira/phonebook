const express = require("express");
const router = express.Router();
const controller = require("./controller");

// route for creating a new entry in the phonebook
router.post("/newentry", controller.createPerson);

module.exports = router;
