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
