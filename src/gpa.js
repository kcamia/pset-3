const readlineSync = require("readline-sync");

let gradeInput = readlineSync.question("\nEnter a letter grade: ");

switch (gradeInput) {
  case ("A" || "a"):
    console.log("\nYour GPA is 4.00.")
    break
  case ("A-" || "a-"):
    console.log("\nYour GPA is 3.66.")
    break
} //this dont work
