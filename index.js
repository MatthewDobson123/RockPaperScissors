// Create a function named getComputerChoice
// This function will randomly return one of the following strings:
// "rock", "paper", or "scissors"
// Test the function with console.log

// Create a function named getHumanChoice
// This function will prompt the user to enter "rock", "paper", or "scissors"
// Assume valid input (no error checking needed yet)
// Convert the input to lowercase and trim extra spaces
// Return the result
// Test the function with console.log

// Declare two global variables: humanScore and computerScore
// Initialize both with the value 0

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

function getHumanChoice(){
  const input = prompt("rock, paper, or scissors:");
  return input.toLowerCase().trim();
}

console.log(getHumanChoice());




console.log(getComputerChoice);

function playRound(playerSelection, computerSelection){
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();
  if (player === computer) {
    return 
  }
   
}