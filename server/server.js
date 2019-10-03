const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// creation if the server
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// the phonebook endpoint
const phonebook = require("./phonebook");
app.use("/phonebook", phonebook);

// start the server
app.listen(PORT, () => {
  console.log(`listenning on port ${PORT}........`);
});
module.exports = app;
