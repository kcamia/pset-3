const readlineSync = require("readline-sync");

let monthInput = readlineSync.question("\nEnter a month: ");

let lower = monthInput.toLowerCase();

if (lower === "january" || lower === "jan") {
  console.log("\n31 days.");
} else if (lower === "february" || lower === "feb") {
  console.log("\n28 or 29 days.");
} else if (lower === "march" || lower === "mar") {
  console.log("\n31 days.");
} else if (lower === "april" || lower === "apr") {
  console.log("\n30 days.");
} else if (lower === "may") {
  console.log("\n31 days.");
} else if (lower === "june" || lower === "jun") {
  console.log("\n30 days.");
} else if (lower === "july" || lower === "jul") {
  console.log("\n31 days.");
} else if (lower === "august" || lower === "aug") {
  console.log("\n31 days.");
} else if (lower === "september" || lower === "sep") {
  console.log("\n30 days.");
} else if (lower === "october" || lower === "oct") {
  console.log("\n31 days.");
} else if (lower === "november" || lower === "nov") {
  console.log("\n30 days.");
} else if (lower === "december" || lower === "dec") {
  console.log("\n31 days.");
} else {
  console.log("\nInvalid.");
}
