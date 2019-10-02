const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const phonebook = require("./phonebook");
app.use("/home", phonebook);

app.listen(PORT, () => {
  console.log(`listenning on port ${PORT}........`);
});
module.exports = app;
