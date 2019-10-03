const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/newentry", controller.createPerson);
module.exports = router;
