const readlineSync = require("readline-sync");

const MINIMUM = 0
const MAXIMUM = Number.MAX_SAFE_INTEGER

let yearInput = Number(readlineSync.question("\nEnter a year: "));

let remainder = yearInput % 4

if (Number.isNaN(yearInput)) {
  console.log("\nInvalid.")
} else if (yearInput < MINIMUM || yearInput > MAXIMUM) {
  console.log("\nInvalid.")
} else if (remainder > 0) {
  console.log("\n" + yearInput + " is not a leap year.")
} else {
  console.log("\n" + yearInput + " is a leap year.")
}
