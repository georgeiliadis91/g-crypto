const hash = require("object-hash");
const constants = require("../constants/constants");

/* 
Task string [] 
returns hash string
*/

function generateHash(stringArray) {
  let tempString = "";

  for (const i of stringArray) {
    tempString += i.toString();
  }

  return hash(tempString);
}

/* Generates number inside the min-max range */
function generateNumber() {
  return (
    Math.floor(
      Math.random() *
        (Math.floor(constants.MAX_NUMBER_LIMIT) -
          Math.ceil(constants.MIN_NUMBER_LIMIT) +
          1)
    ) + Math.ceil(constants.MIN_NUMBER_LIMIT)
  );
}

/* Creates a transaction block hash */

function createTransactionBlockHash() {
  let transactionArray = [];
  for (let i = 0; i < constants.BLOCK_SIZE; i++) {
    transactionArray.push(generateNumber());
  }

  return generateHash(transactionArray);
}

module.exports = { generateHash, createTransactionBlockHash, generateNumber };
