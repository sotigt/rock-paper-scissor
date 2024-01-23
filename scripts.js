//****  ROCK PAPER SCISSORS
// Fuction to randomize computer choice 
// Function to compare user choice to computer choice 
// Depending on result show different text

function getComputerChoice () {

    const options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];

    return randomOption;
}

function playRound (computerChoice, playerChoice) {
    if(
        playerChoice.toLowerCase() === "rock" ||
        playerChoice.toLowerCase() === "paper" ||
        playerChoice.toLowerCase() === "scissors"
    ) {
     //logic for comparing computerChoice and playerChoice   
    } else {
        return alert("You must choose rock, paper or scissors to play the game!");
    }
}

playRound(getComputerChoice(), prompt("Rock, paper, or scissors?"));