#! /usr/bin/env node

console.log ("\n◄◄◄◄◄◄◄ NUMBER GUESSING GAME ►►►►►►►\n");

import inquirer from "inquirer";

let attempt= 5;

while(attempt > 0){
const answer = await inquirer.prompt ([{
    message: `(Attemps Left ${attempt})\nPlease Guess a Number between 1 - 6 : `,
    type: "number",
    name: "userGuessedNumber",
}])

const randomNumber =  Math.floor( Math.random() * 6 + 1);
console.log("\nComputer Generated Number =", randomNumber);

if (answer.userGuessedNumber === randomNumber)
    {
        console.log("\nCONGRATULATIONS !! You Guessed a Right Number");
        console.log("YOU WON :)");
    break;
}
    else 
    {
        console.log("\nOhh No !! You Guessed a Wrong Number");
        if(attempt > 1){    
        console.log("TRY AGAIN..\n");}
    }
    attempt--;
}

if (attempt==0){
    console.log("\nYOUR 5 ROUNDS COMPLETED!! TRY NEXT TIME");
}

