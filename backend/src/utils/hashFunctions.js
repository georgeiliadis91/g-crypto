const hash = require("object-hash");
const constants = require("../constants/constants");

/* 
Task string [] 
returns hash string
*/

function generateHash(hashArray) {
  let tempString = "";

  for (const hashItem of hashArray) {
    tempString += hashItem;
  }

  return hash(tempString);
}

/* Generates number inside the min-max range and then hashed it */
function generateDummyHash() {
  return hash(
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
    transactionArray.push(generateDummyHash());
  }

  return {
    transactionArray: transactionArray,
    targetHash: generateHash(transactionArray),
  };
}

module.exports = {
  generateHash,
  createTransactionBlockHash,
  generateDummyHash,
};
