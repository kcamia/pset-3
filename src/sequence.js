const readlineSync = require("readline-sync");

const MINIMUM = Number.MIN_SAFE_INTEGER
const MAXIMUM = Number.MAX_SAFE_INTEGER

let firstNumber = Number(readlineSync.question("\nEnter three numbers.\n "));
let secondNumber = Number(readlineSync.question(""));
let thirdNumber = Number(readlineSync.question(""));

let numbers = [firstNumber, secondNumber, thirdNumber]


if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
  console.log("\nInvalid.")
}
if (Number.isNaN(thirdNumber)) {
  console.log("\nInvalid.")
}



if () {
  console.log("")
}
