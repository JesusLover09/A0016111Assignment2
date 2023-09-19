
/*
    Name: Geoffrey Sarpong
    Class: FrontEnd Development
    Objective: Create a program that generates a random number 
            between 1 and 10. Prompt the user to guess the number. 
            Continue asking the user for their guess until 
            they guess the correct number.
    Date: September 18, 2023
*/

// take input from the user
function multiplicationTableGenerator(){
    const number = parseInt(prompt('Enter an integer: '));

    //creating a multiplication table
    for(let i = 1; i <= 10; i++) {

        // multiply i with number
        const result = i * number;

        // display the result
        console.log(`${number} * ${i} = ${result}`);
    }

}

//function call
multiplicationTableGenerator();