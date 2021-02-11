const express = require("express");
const router = express.Router();
const hashFunctions = require("../utils/hashFunctions");

router.get("/", (req, res) => {
  res
    .send({ response: hashFunctions.createTransactionBlockHash() })
    .status(200);
});

module.exports = router;
