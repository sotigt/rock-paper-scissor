/***** ROCK PAPER SCISSORS *****/
choiceBtns = document.querySelectorAll(".choiceBtn");
let infoDiv = document.querySelector(".infoDiv");
let roundResultDiv = document.querySelector(".roundResultDiv");
let finalResultsDiv = document.querySelector(".finalResultsDiv");

choiceBtns.forEach(button => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.id);
    })
})

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];

    return randomOption;
}

function playRound (computerChoice, playerChoice) {
    roundResultDiv.textContent = `Player: ${playerChoice}. Computer: ${computerChoice}`;

    if(playerChoice === computerChoice) {
        infoDiv.textContent = "It is a tie! Try again. Rock, paper or scissors?";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        infoDiv.textContent = "The player won this round";
        return game(true)
    } else {
        infoDiv.textContent = "The computer won this round";
        return game(false);
    }
}

let playerScore = 0;
let computerScore = 0;
let round = 0; 

function game (result) {
    round = round + 1;


    if(result) {
        playerScore = playerScore + 1;
    } else {
        computerScore = computerScore + 1;
    }

    if(round === 5) {
        playerScore > computerScore 
        ? finalResultsDiv.innerText = `The game has ended. You won! Your score was ${playerScore} and the computer got ${computerScore}.`
        : finalResultsDiv.innerText = `The game has ended. You lost! Your score was ${playerScore} and the computer got ${computerScore}.`
    }

}




