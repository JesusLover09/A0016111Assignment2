
/*
    Name: Geoffrey Sarpong
    Class: FrontEnd Development
    Objective: Create a program that generates a random number 
            between 1 and 10. Prompt the user to guess the number. 
            Continue asking the user for their guess until 
            they guess the correct number.
    Date: September 18, 2023
*/

function passordValidator() {
    do {
        // Prompt the user to set a password
        var password = prompt("Please set a password:");
      
        // Prompt the user to confirm the password
        var confirm_password = prompt("Please confirm your password:");
      
        // Check if the passwords match
        if (password === confirm_password) {
          alert("Password set successfully!");
        } else {
          alert("Passwords do not match. Please try again.");
        }
      } while (password !== confirm_password);
      
}

//function call
passordValidator();