
/*
    Name: Geoffrey Sarpong
    Class: FrontEnd Development
    Objective: Create a program that generates a random number 
            between 1 and 10. Prompt the user to guess the number. 
            Continue asking the user for their guess until 
            they guess the correct number.
    Date: September 18, 2023
*/


function guessNumber() {

    // Random number between 1 and 10
    const random = Math.floor(Math.random() * 10) + 1;

    //User input promt
    let userNum = parseInt(prompt('Guess a number from 1 to 10: '));

    //Keep asking the user to type in the number
    while(userNum !== random) {
        userNum = parseInt(prompt('Try again: Guess a number from 1 to 10: '));
    }

    // check for the correct input
    if(userNum == random) {
        console.log('You guessed the correct number.');
    }

  }

//function call
guessNumber();