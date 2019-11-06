const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

let input = Number(readlineSync.question("\nEnter a dollar amount: "));

let amount = input * 100;

let remainderQuarter = amount % QUARTER;
let minusRemainderQuarter = amount - remainderQuarter;
let quarterAmount = minusRemainderQuarter / QUARTER;
let quartersNeeded = Math.ceil(quarterAmount);

let remainderDime = remainderQuarter % DIME;
let minusRemainderDime = remainderQuarter - remainderDime;
let dimeAmount = minusRemainderDime / DIME;
let dimesNeeded = Math.ceil(dimeAmount);

let remainderNickel = remainderDime % NICKEL;
let minusRemainderNickel = remainderDime - remainderNickel;
let nickelAmount = minusRemainderNickel / NICKEL;
let nickelsNeeded = Math.ceil(nickelAmount);

let pennyAmount = remainderNickel / PENNY;
let penniesNeeded = Math.ceil(pennyAmount);

if (Number.isNaN(amount)) {
    console.log("Invalid.");
} else if (input < MIN || input > MAX) {
    console.log("\nInvalid.");
} else {
    console.log("\n" + quartersNeeded + " quarters, " + dimesNeeded + " dimes, " + nickelsNeeded + " nickels, and " + penniesNeeded + " pennies.");
}
