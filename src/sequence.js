const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let first = Number(readlineSync.question("\nEnter three numbers.\n\n"));
let second = Number(readlineSync.question(""));
let third = Number(readlineSync.question(""));

if (Number.isNaN(first) || Number.isNaN(second) || Number.isNaN(third)) {
  console.log("\nInvalid.");
} else if (first < MIN || first > MAX || second < MIN || second > MAX || third < MIN || third > MAX) {
  console.log("\nInvalid.");
} else if (first === second && second === third) {
  console.log("\nEqual.");
} else if (first < second && second < third) {
  console.log("\nStrictly increasing.");
} else if (first <= second && second <= third) {
  console.log("\nIncreasing.");
} else if (first > second && second > third) {
  console.log("\nStrictly decreasing.");
} else if (first >= second && second >= third) {
  console.log("\nDecreasing.");
} else {
  console.log("\nUnordered.");
}
