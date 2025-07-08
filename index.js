// Create a function named getComputerChoice
// This function will randomly return one of the following strings:
// "rock", "paper", or "scissors"
// Test the function with console.log

// Create a function named playRound
// This function takes two parameters: playerSelection and computerSelection
// Convert playerSelection to lowercase to handle case-insensitive input
// Compare the two choices and determine the winner of the round
// Return a string with the result, e.g. "You lose! Paper beats Rock"

// Create a function named playGame
// Inside this function:
//  - Initialize playerScore and computerScore to 0
//  - Use a loop to play 5 rounds:
//     - For each round, get player input (use prompt) and get a


function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice);