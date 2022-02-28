console.log("Running assignment...");

const transactions = require("./simple-transaction-data").data;

let arrayOfVISA = [];
/*
In assignment.js I have imported a dummy data set, containing an array of transactions. 
And I have started the assignment with defining the function `filterFunction`, 
you are to finish this function so it returns a filtered list of transactions that fulfills these requirements:
 1. 'credit_card_company' is 'VISA'
 2. 'transaction_date' is 2015 or later
 3. price is 50 or above
 --------------------------------------------------------------------------------------------
 Data:
 {
    "credit_card_company": "VISA",
    "transaction_date": "2018-09-07T14:43:15.792+02:00",
    "price": "90",
    "category": "Home"
  }
 */
// Assignment 1:
const filterFunction = (data) => {
  return data.filter((transaction) => {
    return (
      transaction.credit_card_company === "VISA" &&
      transaction.transaction_date.slice(0, 4) > 2015 &&
      transaction.price >= 50
    );
  });
};

console.log(filterFunction(transactions));
// Assignment 2:
const aboveAverageFunction = (data) => {};
