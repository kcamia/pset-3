const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER = 0.25;
const DIME = 0.1;
const NICKEL = 0.05;
const PENNY = 0.01

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("Invalid.")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid.")
} else {
    let remainderQuarter = amount % QUARTER
    let quarterAmount = remainderQuarter / QUARTER

    let remainderDime = remainderQuarter % DIME
    let dimeAmount = remainderDime / DIME

    let remainderNickel = remainderDime % NICKEL
    let nickelAmount = remainderNickel / NICKEL
}
