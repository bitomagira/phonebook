const express = require("express");
const router = express.Router();
const controller = require("./controller");

// Home page
router.get("/", controller.searchAll);

// route for creating a new entry in the phonebook
router.post("/newentry", controller.createPerson);

// route for searching by name or number
router.get("/search", controller.search);

// route to update an entry
router.put("/update/:id", controller.update);

module.exports = router;
