
const prompt = require ('prompt-sync')();

function checkNumberSign() { 
    const input = prompt("Enter your age:"); 
    const number = Number(input); 
    
    if (isNaN(number)) { 
        console.log("Invalid input. Please enter a valid number."); 
    } else { 
        const result = 
        number > 18 ? `${number} you can vote` : `${number} you cannot vote`; 
    
        console.log(result); 
    } 
    } 
    
    // Call the function to start the program 
    checkNumberSign(); 
    