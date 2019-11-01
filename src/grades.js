const readlineSync = require("readline-sync");

let gradeInput = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0
const MAX = 100

const aRange = 90 >= gradeInput <= 100
const bRange = 80 >= gradeInput <= 89
const cRange = 70 >= gradeInput <= 79
const dRange = 60 >= gradeInput <= 69
const fRange = 0 >= gradeInput <= 59

if (Number.isNaN(gradeInput)) {
  console.log("\nInvalid.")
} else if (gradeInput < MIN|| gradeInput > MAX) {
  console.log("\nInvalid.")
} else if (gradeInput = aRange) {
  console.log("\nYou received an A.")
} else if (gradeInput = bRange) {
  console.log("\nYou received a B.")
} else if (gradeInput = cRange) {
  console.log("\nYou received a C.")
} else if (gradeInput = dRange) {
  console.log("\nYou received a D.")
} else if (gradeInput = fRange) {
  console.log("\nYou received an F.")
}
