const readlineSync = require("readline-sync");

let gradeInput = Number(readlineSync.question("\nEnter a grade: "));

const MIN = 0
const MAX = 100

const A_MAX = 100
const A_MIN = 90
const B_MAX= 89
const B_MIN = 80
const C_MAX = 79
const C_MIN = 70
const D_MAX = 69
const D_MIN = 60
const F_MAX = 59
const F_MIN = 0

if (Number.isNaN(gradeInput)) {
  console.log("\nInvalid.")
} else if (gradeInput < MIN || gradeInput > MAX) {
  console.log("\nInvalid.")
} else if (A_MAX >= gradeInput && gradeInput >= A_MIN) {
  console.log("\nYou received an A.")
} else if (B_MAX >= gradeInput && gradeInput >= B_MIN) {
  console.log("\nYou received a B.")
} else if (C_MAX >= gradeInput && gradeInput >= C_MIN) {
  console.log("\nYou received a C.")
} else if (D_MAX >= gradeInput && gradeInput >= D_MIN) {
  console.log("\nYou received a D.")
} else if (F_MAX >= gradeInput && gradeInput >= F_MIN) {
  console.log("\nYou received an F.")
} else {
  console.log("\nInvalid.")
}
