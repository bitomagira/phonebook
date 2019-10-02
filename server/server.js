const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(cors());
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server running correctly!");
});

app.listen(PORT, () => {
  console.log(`listenning on port ${PORT}........`);
});
module.exports = router;
