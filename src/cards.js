const readlineSync = require("readline-sync");

let cardInput = readlineSync.question("\nEnter a playing card: ");

let playingCard = cardInput.toLowerCase();

switch (playingCard) {
  case "ac":
    console.log("\nAce of Clubs.")
    break;
  case "2c":
    console.log("\nTwo of Clubs.")
    break;
  case "3c":
    console.log("\nThree of Clubs.")
    break;
  case "4c":
    console.log("\nFour of Clubs.")
    break;
  case "5c":
    console.log("\nFive of Clubs.")
    break;
  case "6c":
    console.log("\nSix of Clubs.")
    break;
  case "7c":
    console.log("\nSeven of Clubs.")
    break;
  case "8c":
    console.log("\nEight of Clubs.")
    break;
  case "9c":
    console.log("\nNine of Clubs.")
    break;
  case "tc":
    console.log("\nTen of Clubs.")
    break;
  case "jc":
    console.log("\nJack of Clubs.")
    break;
  case "qc":
    console.log("\nQueen of Clubs.")
    break;
  case "kc":
    console.log("\nKing of Clubs.")
    break;
  case "ad":
    console.log("\nAce of Diamonds.")
    break;
  case "2d":
    console.log("\nTwo of Diamonds.")
    break;
  case "3d":
    console.log("\nThree of Diamonds.")
    break;
  case "4d":
    console.log("\nFour of Diamonds.")
    break;
  case "5d":
    console.log("\nFive of Diamonds.")
  break;
  case "6d":
    console.log("\nSix of Diamonds.")
    break;
  case "7d":
    console.log("\nSeven of Diamonds.")
    break;
  case "8d":
    console.log("\nEight of Diamonds.")
    break;
  case "9d":
    console.log("\nNine of Diamonds.")
    break;
  case "td":
    console.log("\nTen of Diamonds.")
    break;
  case "jd":
    console.log("\nJack of Diamonds.")
    break;
  case "qd":
    console.log("\nQueen of Diamonds.")
    break;
  case "kd":
    console.log("\nKing of Diamonds.")
    break;
  case "ah":
    console.log("\nAce of Hearts.")
    break;
  case "2h":
    console.log("\nTwo of Hearts.")
    break;
  case "3h":
    console.log("\nThree of Hearts.")
    break;
  case "4h":
    console.log("\nFour of Hearts.")
    break;
  case "5h":
    console.log("\nFive of Hearts.")
    break;
  case "6h":
    console.log("\nSix of Hearts.")
    break;
  case "7h":
    console.log("\nSeven of Hearts.")
    break;
  case "8h":
    console.log("\nEight of Hearts.")
    break;
  case "9h":
    console.log("\nNine of Hearts.")
    break;
  case "th":
    console.log("\nTen of Hearts.")
    break;
  case "jh":
    console.log("\nJack of Hearts.")
    break;
  case "qh":
    console.log("\nQueen of Hearts.")
    break;
  case "kh":
    console.log("\nKing of Hearts.")
    break;
  case "as":
    console.log("\nAce of Spades.")
    break;
  case "2s":
    console.log("\nTwo of Spades.")
    break;
  case "3s":
    console.log("\nThree of Spades.")
    break;
  case "4s":
    console.log("\nFour of Spades.")
    break;
  case "5s":
    console.log("\nFive of Spades.")
    break;
  case "6s":
    console.log("\nSix of Spades.")
    break;
  case "7s":
    console.log("\nSeven of Spades.")
    break;
  case "8s":
    console.log("\nEight of Spades.")
    break;
  case "9s":
    console.log("\nNine of Spades.")
    break;
  case "ts":
    console.log("\nTen of Spades.")
    break;
  case "js":
    console.log("\nJack of Spades.")
    break;
  case "qs":
    console.log("\nQueen of Spades.")
    break;
  case "ks":
    console.log("\nKing of Spades.")
    break;
  default:
   console.log("\nInvalid.")
   break;
}
