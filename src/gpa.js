const readlineSync = require("readline-sync");

const gradeInput = readlineSync.question("\nEnter a letter grade: ");

let capitalized = gradeInput.toUpperCase();

const aGrade = 4.00
const bGrade = 3.00
const cGrade = 2.00
const dGrade = 1.00
const fGrade = 0.00
let plusOrMinus = 0.33

switch (capitalized) {
  case ("A"):
    console.log("\nYour GPA is " + aGrade + ".00.");
    break;
  case ("B"):
    console.log("\nYour GPA is " + bGrade + ".00.");
    break;
  case ("C"):
    console.log("\nYour GPA is " + cGrade + ".00.");
    break;
  case ("D"):
    console.log("\nYour GPA is " + dGrade + ".00.");
    break;
  case ("F"):
    console.log("\nYour GPA is " + fGrade + ".00.");
    break;
  case ("A-"):
    let aMinus = aGrade - plusOrMinus
    let aMinusGrade = aMinus.toFixed(2)
    console.log("\nYour GPA is " + aMinusGrade + ".");
    break;
  case ("B-"):
    let bMinus = bGrade - plusOrMinus
    let bMinusGrade = bMinus.toFixed(2)
    console.log("\nYour GPA is " + bMinusGrade + ".");
    break;
  case ("C-"):
    let cMinus = cGrade - plusOrMinus
    let cMinusGrade = cMinus.toFixed(2)
    console.log("\nYour GPA is " + cMinusGrade + ".");
    break;
  case ("D-"):
    let dMinus = dGrade - plusOrMinus
    let dMinusGrade = dMinus.toFixed(2)
    console.log("\nYour GPA is " + dMinusGrade + ".");
    break;
  case ("A+"):
    console.log("\nYour GPA is " + aGrade + ".00.");
    break;
  case ("B+"):
    let bPlus = bGrade + plusOrMinus
    console.log("\nYour GPA is " + bPlus + ".");
    break;
  case ("C+"):
    let cPlus = cGrade + plusOrMinus
    console.log("\nYour GPA is " + cPlus + ".");
    break;
  case ("D+"):
    let dPlus = dGrade + plusOrMinus
    console.log("\nYour GPA is " + dPlus + ".");
    break;
  default:
    console.log("\nInvalid.")
}
