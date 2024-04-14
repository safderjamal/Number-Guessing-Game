#! /usr/bin/env node
console.log("\n◄◄◄◄◄◄◄ NUMBER GUESSING GAME ►►►►►►►\n");
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Please Guess a Number between 1 - 6: ",
        type: "number",
        name: "userGuessedNumber",
    }]);
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("\nComputer Generated Number =", randomNumber);
if (answer.userGuessedNumber === randomNumber) {
    console.log("\nCONGRATULATIONS !! You Guessed a Right Number");
    console.log("YOU WON :)");
}
else {
    console.log("\nOhh No !! You Guessed a Wrong Number");
    console.log("TRY AGAIN..");
}
