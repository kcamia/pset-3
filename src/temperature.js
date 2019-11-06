const readlineSync = require("readline-sync");

const boilingFahrenheit = 212;
const freezingFahrenheit = 32;
const boilingCelsius = 100;
const freezingCelsius = 0;
const boilingKelvin = 373.2;
const freezingKelvin = 273.2;

let temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scaleInput = readlineSync.question("Enter a scale: ");

let scale = scaleInput.toLowerCase();

if (Number.isNaN(temperature)) {
  console.log("\nInvalid.");
} else if (scale === "f" && temperature >= 212) {
  console.log("\nGas.");
} else if (scale === "f" && temperature <= 32) {
  console.log("\nSolid.");
} else if (scale === "f" && temperature < 212 && temperature > 32) {
  console.log("\nLiquid.");
} else if (scale === "c" && temperature >= 100) {
  console.log("\nGas.");
} else if (scale === "c" && temperature <= 0) {
  console.log("\nSolid.");
} else if (scale === "c" && temperature < 100 && temperature > 0) {
  console.log("\nLiquid.");
} else if (scale === "k" && temperature >= 373.2) {
  console.log("\nGas.");
} else if (scale === "k" && temperature <= 273.2) {
  console.log("\nSolid.");
} else if (scale === "k" && temperature < 373.2 && temperature > 273.2) {
  console.log("\nLiquid.");
} else {
  console.log("\nInvalid.");
}
