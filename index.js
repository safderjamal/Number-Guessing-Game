#! /usr/bin/env node
//Shebang
console.log("\n◄◄◄◄◄◄◄ NUMBER GUESSING GAME ►►►►►►►\n");
console.log("You have total 5 Attempts to guess the correct number");
import inquirer from "inquirer";
let attempt = 5;
//Apply loop, user can try only 5 times
while (attempt > 0) {
    const answer = await inquirer.prompt([{
            message: `(Attemps Left ${attempt})\nPlease guess a number between 1 - 6 : `,
            type: "number",
            name: "userGuessedNumber",
        }]);
    //Formula to created the random number with round figure
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log("\nComputer Generated Number =", randomNumber);
    if (answer.userGuessedNumber === randomNumber) {
        console.log("\nCONGRATULATIONS !! You Guessed The Correct Number");
        console.log("YOU WON :)");
        break;
    }
    else {
        console.log("\nOhh No !! You Guessed The Wrong Number");
        if (attempt > 1) {
            console.log("TRY AGAIN..\n");
        }
        else {
            console.log("\nYOU LOST :(");
            console.log("\nYOUR 5 ATTEMPTS COMPLETED!! TRY NEXT TIME");
        }
    }
    attempt--;
}
