const readlineSync = require("readline-sync");

const MINIMUM = Number.MIN_SAFE_INTEGER
const MAXIMUM = Number.MAX_SAFE_INTEGER

let number = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(number)) {
  console.log("\nInvalid.")
} else if (number < MINIMUM || number > MAXIMUM) {
  console.log("\nInvalid.")
} else if (number === 0) {
  console.log("\nZero.")
} else if (number > 0) {
  console.log("\nPositive.")
} else {
  console.log("\nNegative.")
}
