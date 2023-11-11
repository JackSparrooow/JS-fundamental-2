
const prompt = require ('prompt-sync')();

function checkNumberSign() { 
    const input = prompt("Enter a number:"); 
    const number = Number(input); 
    
    if (isNaN(number)) { 
        console.log("Invalid input. Please enter a valid number."); 
    } else { 
        const result = 
        number === 0 ? "The number is zero." : 
        number > 0 ? `${number} is positive.` : `${number} is negative.`; 
    
        console.log(result); 
    } 
    } 
    
    // Call the function to start the program 
    checkNumberSign(); 
    