const readlineSync = require("readline-sync");

const MINIMUM = Number.MIN_SAFE_INTEGER
const MAXIMUM = Number.MAX_SAFE_INTEGER

let integer = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isNaN(integer)) {
  console.log("\nInvalid.")
} else if (integer < MINIMUM || integer > MAXIMUM) {
  console.log("\nInvalid.")
} else if (integer === 0) {
  console.log("\nEven.")
} else if (Math.abs(integer) % 2 === 0) {
  console.log("\nEven.")
} else {
  console.log("\nOdd.")
}
