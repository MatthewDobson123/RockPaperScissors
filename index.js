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
// This function takes two parameters: humanChoice and computerChoice
// Convert humanChoice to lowercase to handle case-insensitive input
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


function playGame() {
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  const human = humanChoice.toLowerCase();
  const computer = computerChoice.toLowerCase();
  
  if (human === computer) {
    return "Draw";
  } else if (human === "rock" && computer === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (human === "paper" && computer === "rock") {
    return "You Win! Paper beats Rock";
  } else if (human === "scissors" && computer === "paper") {
    return "You Win! Scissors beats Paper";
  }
  else {
    return `You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`;
  }
}

const humanChoice1 = getHumanChoice();
  const computerChoice1 = getComputerChoice();
  const result1 = playRound(humanChoice1, computerChoice1);
  console.log("Round 1:", result1);

  if (result1.startsWith("You Win")) {
  humanScore++;
} else if (result1.startsWith("You lose")) {
  computerScore++;
}

const humanChoice2 = getHumanChoice();
  const computerChoice2 = getComputerChoice();
  const result2 = playRound(humanChoice2, computerChoice2);
  console.log("Round 2:", result2);

  if (result2.startsWith("You Win")) {
  humanScore++;
} else if (result2.startsWith("You lose")) {
  computerScore++;
}

  const humanChoice3 = getHumanChoice();
  const computerChoice3 = getComputerChoice();
  const result3 = playRound(humanChoice3, computerChoice3);
  console.log("Round 3:", result3);

    if (result3.startsWith("You Win")) {
  humanScore++;
} else if (result3.startsWith("You lose")) {
  computerScore++;
}

  const humanChoice4 = getHumanChoice();
  const computerChoice4 = getComputerChoice();
  const result4 = playRound(humanChoice4, computerChoice4);
  console.log("Round 4:", result4);

    if (result4.startsWith("You Win")) {
  humanScore++;
} else if (result4.startsWith("You lose")) {
  computerScore++;
}

  const humanChoice5 = getHumanChoice();
  const computerChoice5 = getComputerChoice();
  const result5 = playRound(humanChoice5, computerChoice5);
  console.log("Round 5:", result5);

    if (result5.startsWith("You Win")) {
  humanScore++;
} else if (result5.startsWith("You lose")) {
  computerScore++;
}

console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🏆 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("😞 You lost the game.");
  } else {
    console.log("🤝 It's a tie!");
  }
}


playGame()
